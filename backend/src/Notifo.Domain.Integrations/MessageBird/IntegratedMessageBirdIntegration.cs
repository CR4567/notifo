﻿// ==========================================================================
//  Notifo.io
// ==========================================================================
//  Copyright (c) Sebastian Stehle
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Notifo.Domain.Channels;
using Notifo.Domain.Channels.Sms;
using Notifo.Domain.Integrations.MessageBird.Implementation;
using Notifo.Domain.Integrations.Resources;

namespace Notifo.Domain.Integrations.MessageBird
{
    public sealed class IntegratedMessageBirdIntegration : IIntegration
    {
        public IntegrationDefinition Definition { get; } =
            new IntegrationDefinition(
                "MessageBirdIntegrated",
                Texts.MessageBirdIntegrated_Name,
                "./integrations/messagebird.svg",
                new List<IntegrationProperty>(),
                new List<UserProperty>(),
                new HashSet<string>
                {
                    Providers.Sms
                })
            {
                Description = Texts.MessageBirdIntegrated_Description
            };

        public bool CanCreate(Type serviceType, string id, ConfiguredIntegration configured)
        {
            return serviceType == typeof(ISmsSender);
        }

        public object? Create(Type serviceType, string id, ConfiguredIntegration configured, IServiceProvider serviceProvider)
        {
            if (CanCreate(serviceType, id, configured))
            {
                var options = serviceProvider.GetRequiredService<IOptions<MessageBirdOptions>>();

                return new MessageBirdSmsSender(
                    serviceProvider.GetRequiredService<IMessageBirdClient>(),
                    serviceProvider.GetRequiredService<ISmsCallback>(),
                    serviceProvider.GetRequiredService<ISmsUrl>(),
                    id,
                    options.Value.PhoneNumber,
                    options.Value.PhoneNumbers);
            }

            return null;
        }
    }
}
