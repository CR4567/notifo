﻿// ==========================================================================
//  Notifo.io
// ==========================================================================
//  Copyright (c) Sebastian Stehle
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using Notifo.Domain.Integrations.Resources;

namespace Notifo.Domain.Integrations.Smtp;

public sealed class SmtpIntegration : IIntegration
{
    private readonly SmtpEmailServerPool serverPool;

    private static readonly IntegrationProperty HostProperty = new IntegrationProperty("host", PropertyType.Text)
    {
        EditorLabel = Texts.SMTP_HostLabel,
        EditorDescription = null,
        IsRequired = true,
        Summary = true
    };

    private static readonly IntegrationProperty HostPortProperty = new IntegrationProperty("port", PropertyType.Number)
    {
        EditorLabel = Texts.SMTP_PortLabel,
        EditorDescription = null,
        DefaultValue = "587"
    };

    private static readonly IntegrationProperty UsernameProperty = new IntegrationProperty("username", PropertyType.Text)
    {
        EditorLabel = Texts.SMTP_UsernameLabel,
        EditorDescription = Texts.SMTP_UsernameHints
    };

    private static readonly IntegrationProperty PasswordProperty = new IntegrationProperty("password", PropertyType.Password)
    {
        EditorLabel = Texts.SMTP_PasswordLabel,
        EditorDescription = Texts.SMTP_PasswordHints
    };

    private static readonly IntegrationProperty FromEmailProperty = new IntegrationProperty("fromEmail", PropertyType.Text)
    {
        Pattern = Patterns.Email,
        EditorLabel = Texts.Email_FromEmailLabel,
        EditorDescription = Texts.Email_FromEmailDescription,
        IsRequired = true,
        Summary = true
    };

    private static readonly IntegrationProperty FromNameProperty = new IntegrationProperty("fromName", PropertyType.Text)
    {
        EditorLabel = Texts.Email_FromNameLabel,
        EditorDescription = Texts.Email_FromNameDescription,
        IsRequired = true
    };

    public IntegrationDefinition Definition { get; } =
        new IntegrationDefinition(
            "SMTP",
            Texts.SMTP_Name,
            "./integrations/email.svg",
            new List<IntegrationProperty>
            {
                HostProperty,
                HostPortProperty,
                UsernameProperty,
                PasswordProperty,
                FromEmailProperty,
                FromNameProperty
            },
            new List<UserProperty>(),
            new HashSet<string>
            {
                Providers.Email
            })
        {
            Description = Texts.SMTP_Description
        };

    public SmtpIntegration(SmtpEmailServerPool serverPool)
    {
        this.serverPool = serverPool;
    }

    public bool CanCreate(Type serviceType, string id, IntegrationConfiguration configured)
    {
        return serviceType == typeof(IEmailSender);
    }

    public object? Create(Type serviceType, string id, IntegrationConfiguration configured, IServiceProvider serviceProvider)
    {
        if (CanCreate(serviceType, id, configured))
        {
            var host = HostProperty.GetString(configured);

            if (string.IsNullOrWhiteSpace(host))
            {
                return null;
            }

            var port = HostPortProperty.GetNumber(configured);

            if (port == 0)
            {
                return null;
            }

            var fromEmail = FromEmailProperty.GetString(configured);

            if (string.IsNullOrWhiteSpace(fromEmail))
            {
                return null;
            }

            var fromName = FromNameProperty.GetString(configured);

            if (string.IsNullOrWhiteSpace(fromName))
            {
                return null;
            }

            var options = new SmtpOptions
            {
                Username = UsernameProperty.GetString(configured),
                Host = host,
                HostPort = (int)port,
                Password = PasswordProperty.GetString(configured)
            };

            return new SmtpEmailSender(
                () => serverPool.GetServer(options),
                fromEmail,
                fromName);
        }

        return null;
    }
}
