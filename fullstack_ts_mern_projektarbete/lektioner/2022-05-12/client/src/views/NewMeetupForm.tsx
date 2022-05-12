import { useRef } from 'react'

interface Event {
	preventDefault: () => void
}

interface FormObject {
	title: string
	image: string
	address: string
	description: string
}

const NewMeetupForm = () => {
	const titleInputRef = useRef<HTMLInputElement>(null)
	const imageInputRef = useRef<HTMLInputElement>(null)
	const addressInputRef = useRef<HTMLInputElement>(null)
	const descriptionInputRef = useRef<HTMLTextAreaElement>(null)
	
	// const submitHandler = (event: { preventDefault: () => void }) => {
	const submitHandler = (event: Event) => {
		event.preventDefault()
		
		const title = titleInputRef.current?.value
		const image = imageInputRef.current?.value
		
		const formObject: FormObject = {
			title: String(title),
			image: String(image),
			address: String(addressInputRef.current?.value),
			description: String(descriptionInputRef.current?.value)
		}
		
		console.log(formObject)
	}
	
	return (
		<>
			<form onSubmit={ submitHandler }>
				<div>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' required ref={ titleInputRef }/>
				</div>
				<div>
					<label htmlFor='image'>Image</label>
					<input type='url' id='image' required ref={ imageInputRef }/>
				</div>
				<div>
					<label htmlFor='address'>Address</label>
					<input type='text' id='address' required ref={ addressInputRef }/>
				</div>
				<div>
					<label htmlFor='description'>Description</label>
					<textarea id='description' required rows={ 5 } cols={ 30 } ref={ descriptionInputRef }/>
				</div>
				<div>
					<button>Add Meetup</button>
				</div>
			</form>
		
		</>
	)
}

export default NewMeetupForm
