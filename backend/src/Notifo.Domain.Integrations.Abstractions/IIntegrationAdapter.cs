﻿// ==========================================================================
//  Notifo.io
// ==========================================================================
//  Copyright (c) Sebastian Stehle
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

namespace Notifo.Domain.Integrations;

public interface IIntegrationAdapter
{
    Task<UserContext?> FindUserAsync(string appId, string id,
        CancellationToken ct);

    Task<UserContext?> FindUserByPropertyAsync(string appId, string key, string value,
        CancellationToken ct);

    Task UpdateUserAsync(string appId, string id, string key, string value,
        CancellationToken ct);
}
