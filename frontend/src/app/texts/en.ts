/*
 * Notifo.io
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
 */

/* eslint sort-keys-fix/sort-keys-fix: "error" */

export const EN = {
    app: {
        allowEmail: 'Allow Emails',
        allowSms: 'Allow SMS',
        apiDetails: 'Your API Credentials',
        apiKey: 'API Key',
        confirmUrl: 'Confirm URL',
        emailSettings: 'Email Settings',
        emailVerificationHint: 'You will receive an email from Amazon shortly to verify your email address. Please click the link in the email',
        firebaseCredential: 'Credential',
        firebaseProject: 'Project',
        firebaseSettings: 'Firebase Settings',
        smsSettings: 'SMS Settings',
        urls: 'URL Settings',
        webhookUrl: 'Webhook URL',
        welcome: (app: string) => `Welcome to the ${app} App`,
    },
    apps: {
        createButton: 'New App',
        createHeader: 'Create new App',
        createInfo: 'The name is used in the UI and can be changed later.',
        header: 'Apps',
        notFound: 'App not found',
    },
    code: 'en',
    common: {
        actions: 'Actions',
        add: 'Add',
        admin: 'Admin',
        after: 'after',
        allowedModes:  {
            Allowed: 'Allowed',
            NotAllowed: 'Not allowed',
        },
        appId: 'Application ID',
        apps: 'Apps',
        attempt: 'Attempts',
        back: 'Back',
        cancel: 'Cancel',
        channel: 'Channel',
        channels: 'Channels',
        code: 'Code',
        conditionModes: {
            Always: 'Always',
            IfNotConfirmed: 'Not confirmed',
            IfNotSeen: 'Not seen',
            Inherit: '-',
        },
        confirm: 'Confirm',
        confirmMode: 'Confirm Mode',
        confirmModeHints: 'In Explicit mode a button will be shown to confirm the notification.',
        confirmModes: {
            Explicit: 'Explicit',
            None: 'None',
        },
        confirmText: 'Confirm Text',
        confirmTextHints: 'Override the default text of the confirm button.',
        confirmed: 'Confirmed',
        contributors: 'Contributors',
        count: 'Count',
        create: 'Create',
        created: 'Created',
        dangerZone: 'Danger Zone',
        dashboard: 'Home',
        data: 'Data',
        dataHints: 'Optional data that can be used in your code.',
        delete: 'Delete',
        delivered: 'Delivered',
        demo: 'Demo',
        description: 'Description',
        design: 'Design',
        device: 'Device',
        disabled: 'Disabled',
        edit: 'Edit',
        email: 'Email',
        emailAddress: 'Email Address',
        emailName: 'Email Name',
        emailPlaceholder: 'name@my-site.com',
        emailTemplate: 'Email Template',
        emailVerificationStatus: 'Email verification',
        emails: 'Emails',
        emoji: 'Emoji',
        enabled: 'Enabled',
        error: 'Error has occurred',
        failed: 'Failed',
        firstConfirmed: 'First Confirmed',
        firstDelivered: 'First Delivered',
        firstSeen: 'First seen',
        formatting: 'Formatting',
        fromEmail: 'From Email Address',
        fromName: 'From Name',
        handled: 'Handled',
        html: 'HTML',
        id: 'Id',
        imageLarge: 'Large Image',
        imageSmall: 'Small Image',
        invite: 'Invite',
        inviteByEmail: 'Enter email-address to add contributor.',
        language: 'Language',
        languages: 'Languages',
        lastNotification: 'Last Notification',
        lastSeen: 'Last seen',
        lastUpdate: 'Last Update',
        lastWakeup: 'Last Wakeup',
        linkText: 'Link Text',
        linkTextHints: 'Set the text that will be shown when a link is rendered.',
        linkUrl: 'Link URL',
        linkUrlHints: 'The URL to open when the notification or link is clicked.',
        loading: 'Loading',
        logout: 'Logout',
        message: 'Message',
        messageBody: 'Body',
        messageSubject: 'Subject',
        mobilePush: 'Mobile',
        mode: 'Mode',
        more: 'More',
        name: 'Name',
        no: 'No',
        noIntegration: 'No integration configured.',
        noName: '- Unnamed -',
        noTemplate: 'No named template found.',
        notAvailable: 'Not available',
        notStarted: 'Not started',
        notYet: 'Not yet',
        notificationSettings: 'Notification Settings',
        notifications: 'Notifications',
        overview: 'Overview',
        pagination: (start: number, end: number, total: number) => `${start} to ${end} of ${total}`,
        password: 'Password',
        passwordConfirm: 'Confirm Password',
        passwordsDoNotMatch: 'Passwords doe not match.',
        pending: 'Pending',
        phoneNumber: 'Phone Number',
        preview: 'Preview',
        primary: 'Primary',
        prio: 'Prio',
        profile: 'Profile',
        profileSettings: 'Your Settings',
        propability: 'Propability',
        property: 'Property',
        publish: 'Publish',
        refresh: 'Refresh',
        roles: 'Roles',
        rules: 'Rules',
        sampleSubject: '-- No Subject yet --',
        save: 'Save',
        secondsShort: 'sec.',
        seen: 'Seen',
        select: 'Select',
        send: 'Send',
        sendModes: {
            Inherit: '-',
            NotAllowed: 'Do not allow',
            NotSending: 'Do not send',
            Send: 'Send',
        },
        sent: 'Sent',
        settings: 'Settings',
        showDetails: 'Show details',
        silent: 'Silent',
        sms: 'SMS',
        smsTemplate: 'SMS Template',
        statisticsInfo: 'Updated every 5 seconds (needs refresh)',
        statisticsLabelFn: (name: string) => `${name} (Handled / Attempts / Failed)`,
        status: 'Status',
        subject: 'Subject',
        template: 'Template',
        templateCode: 'Template Code',
        templateCodeHints: 'If a template is used all properties (subject, body and so on) are used from the template, but can be overridden if necessary.',
        templateMode: 'Use template?',
        templates: 'Templates',
        text: 'Text',
        timeToLive: 'Time to live in seconds',
        timestamp: 'Timestamp',
        timezone: 'Timezone',
        token: 'Token',
        topic: 'Topic',
        topicPath: 'Topic Name',
        uploadButton: 'Select file(s)',
        uploadText: 'Drop file on existing item to replace the asset with a newer version.',
        urlPlaceholder: 'https://my-site.com/path',
        users: 'Users',
        variants: 'Variants',
        verified: 'Verified',
        via: 'via',
        webPlugin: 'Web Plugin',
        webPluginHint: 'Integrate Notifo into your Web application using our Plugin',
        webPush: 'Web Push',
        welcome: 'Welcome',
        when: 'when',
        with: 'with',
        yes: 'Yes',
    },
    emailTemplates: {
        bodyHtml: 'HTML Body',
        bodyHtmlValid: 'HTML Body is required and must be a valid template',
        bodyText: 'Text Body',
        bodyTextValid: 'Text Body is required and must be a valid template',
        confirmDelete: 'Do you really want to delete the Template?',
        create: 'Create',
        createWithInterpolation: 'MJML (Legacy)',
        createWithLiquid: 'MJML + Liquid',
        header: 'Email Templates',
        name: 'Template Name',
        notFound: 'No email template found',
        notFoundButton: 'Create template',
        notFoundLanguage: 'No Email template found for this language.',
        subjectValid: 'Subject is required and must be a valid template',
    },
    events: {
        eventsNotFound: 'No matching event found',
        header: 'Events',
        searchPlaceholder: 'Search',
    },
    integrations: {
        condition: 'Condition',
        conditionHints: 'The condition, when the integration should be used.',
        configured: 'Configured',
        confirmDelete: 'Do you really want to delete the Integration?',
        enabledHints: 'Disable the ingration without deleting it.',
        header: 'Integrations',
        modeProduction: 'PROD',
        modeTest: 'TEST',
        priority: 'Priority',
        priorityHints: 'Define a priority when you have configured multiple integrations for the same channel such as MobilePush.',
        supported: 'Supported',
        test: 'Test Mode',
        testHints: 'Use this integration only for production or development mode.',
    },
    log: {
        header: 'Log',
        logEntriesNotFound: 'No matching log entry found',
        searchPlaceholder: 'Search',
    },
    media: {
        confirmDelete: 'Do you really want to delete the Media?',
        header: 'Media',
        mediaNotFound: 'No matching media found',
        searchPlaceholder: 'Search',
    },
    messagingTemplates: {
        confirmDelete: 'Do you really want to delete the Template?',
        create: 'Create',
        header: 'Messaging Templates',
        name: 'Template Name',
        notFound: 'No Messaging template found',
        notFoundButton: 'Create template',
        singleHeader: 'Messaging Template',
    },
    notificationSettings: {
        delayInSeconds: 'Delay in seconds',
        delayInSecondsHints: 'All notifications that are created within this time window are send together.',
        email: {
            name: 'Email',
            send: 'Send as Email',
            title: 'Email',
        },
        fromEmailHints: 'Override the from email address.',
        fromNameHints: 'Override the from email name.',
        messaging: {
            name: 'Messaging',
            send: 'Send using Messaging (Threema, ...)',
            title: 'Messaging',
        },
        mobilepush: {
            name: 'Mobile Push',
            send: 'Send as Mobile Push',
            title: 'Mobile Push',
        },
        settingsInfo: 'Notification settings will be merged in the following order:\n\n1. User settings.\n2. Overridden by topic settings.\n3. Overridden by notification settings.',
        sms: {
            name: 'SMS',
            send: 'Send as SMS',
            title: 'SMS',
        },
        templateHints: 'Select the template for this channel. Only templates with a name will show up here. If no template is defined the primary template is used.',
        web: {
            name: 'Web',
            send: 'Send over Web Page',
            title: 'Web',
        },
        webhook: {
            name: 'Webhook',
            send: 'Send to another Server',
            title: 'Webhook',
        },
        webhookHints: 'Select the webhook integration for this channel. Only webhooks with a name will show up here. If no webhook is defined all webooks are used.',
        webpush: {
            name: 'Web Push',
            send: 'Send as Web Push',
            title: 'Web Push',
        },
    },
    notifications: {
        header: 'Notifications',
        notificationsNotFound: 'No matching notifications found',
        searchPlaceholder: 'Search',
    },
    publish: {
        header: 'Publish',
        success: 'Event has been published.',
    },
    smsTemplates: {
        confirmDelete: 'Do you really want to delete the Template?',
        create: 'Create',
        header: 'SMS Templates',
        name: 'Template Name',
        notFound: 'No SMS template found',
        notFoundButton: 'Create template',
        singleHeader: 'SMS Template',
    },
    subscriptions: {
        confirmDelete: 'Do you really want to delete the Subscription?',
        createButton: 'Subscribe',
        createHeader: 'Create new Subscription',
        editHeader: 'Edit Subscription',
        header: 'Subscriptions',
        searchPlaceholder: 'Search',
        subscriptionsNotFound: 'No matching subscriptions found',
    },
    systemUsers: {
        createHeader: 'Create new User',
        editHeader: 'Edit User',
        header: 'System Users',
        searchPlaceholder: 'Search',
    },
    templates: {
        confirmDelete: 'Do you really want to delete the Template?',
        createButton: 'New',
        header: 'Templates',
        templateEdit: 'Edit',
        templateNew: 'New Template',
        templatesNotFound: 'No matching template found',
    },
    topics: {
        all: 'All Topics',
        createButton: 'New Topic',
        createHeader: 'New Topic',
        descriptionPlaceholder: 'Describe the purpose and content of this topic.',
        explicit: 'Explicit',
        header: 'Topics',
        implicit: 'Implicit',
        namePlaceholder: 'Give your topic a name.',
        searchPlaceholder: 'Search',
        showAutomatically: 'Show automatically',
        showAutomaticallyHints: 'Ask the user to subscribe when he uses the frontend the first time.',
        topicsNotFound: 'No Topics found',
    },
    users: {
        confirmDelete: 'Do you really want to delete the User?',
        createButton: 'New User',
        createHeader: 'Create new User',
        editHeader: 'Edit User',
        header: 'Users',
        lock: 'Lock',
        searchPlaceholder: 'Search',
        unlock: 'Unlock',
        userDetails: 'User Details',
        userNotFound: 'User not found',
        usersNotFound: 'No matching user found',
    },
    validation: {
        atLeastOnString: (p: { label?: string }) => `${p.label} needs at least one value.`,
        emailFn: (p: { label?: string }) => `${p.label} must be a valid email address.`,
        lessThanFn: (p: { label?: string; less: number }) => `${p.label} must be less than ${p.less || 0}.`,
        maxFn: (p: { label?: string; max: number }) => `${p.label} must not greater than ${p.max}.`,
        maxItemsFn: (p: { label?: string; max: number }) => `${p.label} must not have more than ${p.max}.`,
        maxLengthFn: (p: { label?: string; max: number }) => `${p.label} must not have more than ${p.max} character.`,
        minFn: (p: { label?: string; min: number }) => `${p.label} must be at least ${p.min}.`,
        minItemsFn: (p: { label?: string; min: number }) => `${p.label} must have at least ${p.min || 0} items.`,
        minLengthFn: (p: { label?: string; min: number }) => `${p.label} must have at least ${p.min} characters.`,
        moreThanFn: (p: { label?: string; more: number }) => `${p.label} must be greater than ${p.more || 0}.`,
        patternFn: (p: { label?: string }) => `${p.label} is not in a valid format.`,
        requiredFn: (p: { label?: string }) => `${p.label} is required.`,
        topicFn: (p: { label?: string }) => `${p.label} must be a valid topic.`,
        urlFn: (p: { label?: string }) => `${p.label} must be a valid URL.`,
    },
};
