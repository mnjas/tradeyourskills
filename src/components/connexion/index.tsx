'use client'

import React, { createRef, FormEvent, useRef } from 'react'
import css from './index.module.scss'
import { useState } from 'react'

export default function Connexion() {
	const componentRef = createRef<HTMLDivElement>()
	const firstNameRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const errorUsernameMsgRef = createRef<HTMLParagraphElement>()
	const errorCodeMsgRef = createRef<HTMLParagraphElement>()
	const errorMsgRef = useRef<HTMLParagraphElement>(null)
	const [submitting, setSubmitting] = useState(false)

	const handlerInputFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.classList.contains(css.error)) {
			event.currentTarget.classList.remove(css.error)
			event.currentTarget?.nextElementSibling?.classList.remove(css.show)
		}
		if (errorMsgRef.current?.classList.contains(css.show)) {
			errorMsgRef.current?.classList.remove(css.show)
			passwordRef.current?.classList.remove(css.error)
			firstNameRef.current?.classList.remove(css.errorMargin)
		}
	}

	async function handlerSubmit(e: FormEvent) {
		e.preventDefault()
		if (submitting) return

		let validForm = true
		//Init global error
		if (errorMsgRef.current?.classList.contains(css.show)) {
			errorMsgRef.current?.classList.remove(css.show)
		}

		if (firstNameRef.current?.value == '') {
			firstNameRef.current?.classList.add(css.error)
			errorUsernameMsgRef.current?.classList.add(css.show)
			validForm = false
		}

		if (passwordRef.current?.value == '') {
			passwordRef.current?.classList.add(css.error)
			errorCodeMsgRef.current?.classList.add(css.show)
			validForm = false
		}

		if (validForm) {
			setSubmitting(true)
			const data = {
				login: firstNameRef.current?.value,
				password: passwordRef.current?.value
			}
			//
			const res = await fetch('/api/users/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			//
			const result = await res.json()
			if (result.success) {
				window.location.reload()
			} else {
				setSubmitting(false)
				firstNameRef.current?.classList.add(css.errorMargin)
				passwordRef.current?.classList.add(css.error)
				errorMsgRef.current?.classList.add(css.show)
			}
		}
	}

	return (
		<div ref={componentRef} className={css.component}>
			<form onSubmit={handlerSubmit}>
				<label className={css.txtLabel} htmlFor="username">
					Login
				</label>
				<input
					ref={firstNameRef}
					placeholder=""
					type="text"
					id="username"
					name="username"
					className={`${css.formInput}`}
					onFocus={handlerInputFocus}
				/>
				<p className={css.messagesError} ref={errorUsernameMsgRef}>
					This is a mandatory field
				</p>
				<label className={css.txtLabel} htmlFor="password">
					Password
				</label>
				<input
					ref={passwordRef}
					placeholder=""
					type="password"
					id="password"
					name="password"
					className={`${css.formInput}`}
					onFocus={handlerInputFocus}
				/>
				<p className={css.messagesError} ref={errorCodeMsgRef}>
					This is a mandatory field
				</p>
				<p className={css.messagesError} ref={errorMsgRef}>
					Your login or password is incorrect.
				</p>

				<button type="submit" className={css.button}>
					LOGIN
				</button>
				<p className={css.info}>If you do not have any credentials please contact this email address : <a href="mailto:klp-support@proximity.fr">klp-support@proximity.fr</a>.</p>
			</form>
		</div>
	)
}
