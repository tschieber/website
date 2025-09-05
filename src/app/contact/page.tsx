'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from './schema';

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSubmittedSuccess, setFormSubmittedSuccess] = useState(false);

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Error sending message: ${response.statusText}`);
            }
            else {
                setFormSubmittedSuccess(true);
                reset();
            }

            // Show alert with success/failure
            setFormSubmitted(true);
        } catch (error) {
            console.error(error);
            setFormSubmittedSuccess(false);
            setFormSubmitted(true);
        }
    };

    return (
        <main className="main-content">
            <section>
                <div className="container">
                    <h1>Send me a message</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {formSubmitted && (
                            formSubmittedSuccess ? (
                                <div className="alert" role="alert">Your message has been sent.</div>
                            ) : (
                                <div className="alert alert--error" role="alert">Failed to send message. Please try again.</div>
                            )
                        )}

                        <div className="row">
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        className="form-control"
                                        id="name"
                                        {...register("name")} />
                                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="form-group">
                                    <label htmlFor="name">Email</label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        {...register("email")} />
                                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows={10}
                                {...register("message")} />
                            {errors.message && <span className="form-error">{errors.message.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="button-solid mt-5"
                            aria-label="Send message"
                            disabled={isSubmitting}>
                            <span className="button-solid__text">Send Message</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                className="button-solid__icon">
                                <path d="M120-160v-640l760 320zm80-120 474-200-474-200v140l240 60-240 60zm0 0v-400z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}