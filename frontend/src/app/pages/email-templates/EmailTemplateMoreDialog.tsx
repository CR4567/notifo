/*
 * Notifo.io
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
 */

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useEventCallback } from '@app/framework';
import { EmailTemplateDto } from '@app/service';
import { Forms } from '@app/shared/components';
import { texts } from '@app/texts';

export interface EmailTemplateMoreDialogProps {
    // The template to edit.
    template: EmailTemplateDto;

    // Invoked when closed.
    onClose?: () => void;
}

export const EmailTemplateMoreDialog = (props: EmailTemplateMoreDialogProps) => {
    const { onClose, template } = props;

    const doSave = useEventCallback((params: any) => {
        Object.assign(template, params);

        onClose && onClose();
    });

    const form = useForm({ mode: 'onChange' });

    return (
        <Modal isOpen={true} toggle={onClose}>
            <FormProvider {...form}>
                <Form onSubmit={form.handleSubmit(doSave)}>
                    <ModalHeader toggle={onClose}>
                        {texts.common.settings}
                    </ModalHeader>

                    <ModalBody>
                        <fieldset className='mt-3'>
                            <Forms.Text name='fromEmail' vertical
                                label={texts.common.fromEmail} />

                            <Forms.Text name='fromName' vertical
                                label={texts.common.fromName} />
                        </fieldset>
                    </ModalBody>
                    <ModalFooter className='justify-content-between'>
                        <Button type='button' color='none' onClick={onClose}>
                            {texts.common.cancel}
                        </Button>
                        <Button type='submit' color='primary'>
                            {texts.common.save}
                        </Button>
                    </ModalFooter>
                </Form>
            </FormProvider>
        </Modal>
    );
};
