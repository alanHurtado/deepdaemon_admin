import React from 'react'
import { useDispatch } from 'react-redux';
import { registerRelease } from '../../../actions/register';
import { useForm } from '../../../hooks/useForm';
import { useGet } from '../../../hooks/useGet';
import { getTech } from '../../../selectors/get/getTech';

export const FormAddRelease = () => {

    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({
		postType: '',
        descr: '',
        frontImg: '',
        modalMedia: '',
        modalType: '',
        link: '',
        autor: '',
        title: '',
        journal: '',
        yearMonth: '',
        volume: '',
        number: '',
        pages: '',
        publisher: '',
        address: '',
        howpublished: '',
        booktitle: '',
        editor: '',
        series: '',
        organization: '',
        school: '',
        note: '',
        institution: ''
	});

    const { descr, frontImg, modalMedia, link, autor, title, 
            journal, yearMonth, volume, number, pages, publisher,
            address, howpublished, booktitle, editor, series, 
            organization, school, note, institution } = formValues;

    //envio a la api
    const handleSubmit = (e) => {
        e.preventDefault();
		dispatch( registerRelease(formValues) );
    }

	//Traemos la información de tech
	const { data } = useGet(getTech);

    return (
        <div className="container">
					<h2>Agregar Publicacion </h2>
				<hr/>
			<form onSubmit={ handleSubmit }>
				<div className="row">
					<div className="col-md-2 mb-3">
						<label> Tipe </label>
						<select
							className="form-control"
							name='postType'
							onChange={ handleInputChange }
						>
							<option value = 'article' > article </option>
							<option value = 'book' > book </option>
							<option value = 'booklet' > booklet </option>
							<option value = 'conference' > conference </option>
							<option value = 'inbook' > inbook </option>
							<option value = 'incollection' > incollection </option>
							<option value = 'inproceedings' > inproceedings </option>
							<option value = 'manual' > manual </option>
							<option value = 'mastersthesis' > mastersthesis </option>
							<option value = 'misc' > misc </option>
							<option value = 'phdthesis' > phdthesis </option>
							<option value = 'proceedings' > proceedings </option>
							<option value = 'techreport' > techreport </option>
							<option value = 'unpublished' > unpublished </option>
						</select>
					</div>

					<div className="col mb-3">
					<label>Front Image </label>
						<input  
							className="form-control"
							type='file'
							name='frontImg'
							value = { frontImg }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label>Modal Media </label>
							<input 
								className="form-control"
								type='file'
								name='modalMedia'
								value = { modalMedia }
								onChange={ handleInputChange }
							/>
					</div>
					<div className="col-md-2 mb-3">
						<label> Tipe </label>
					<select
						className="form-control"
						name='modalType'
						onChange={ handleInputChange }
					>
						<option value = 'image' > image </option>
						<option value = 'video' > video </option>
						<option value = 'embed' > embed </option>
					</select>
				</div>
				</div>
				<div className="row">
					<div className="col mb-3">
						<label> Description </label>
						<textarea
							className="form-control"
							rows='3' cols='40'
							name='descr'
							placeholder=' Desciption'
							value = { descr }
							onChange={ handleInputChange }
						/>
					</div>
				</div>
				<div className="col mb-3">
					<label> Tech </label>
					<select
							className="form-control"
							name='idTech'
							onChange={ handleInputChange }
						>
							{
								data.map(item =>(
									<option key={item.id} value={item.id}> {item.descr} </option>
								))
							}
						</select>
				</div>
				<div className="row">
					<div className="col mb-3">
						<label> Autor </label>
						<input  							
							className="form-control"
							type='text'
							name='autor'
							placeholder='Autor'
							value = { autor }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label> Title </label>
						<input  
							className="form-control"
							type='text'
							name='title'
							placeholder='Title'
							value = { title }
							onChange={ handleInputChange }
						/>
					</div>
				</div>
				<div className="row">
					<div className="col mb-3">
						<label> Link </label>
						<input  
							className="form-control"
							type='url'
							name='link'
							placeholder='Enlace'
							value = { link }
							onChange={ handleInputChange }
						/>
					</div>
					
					<div className="col mb-3">
						<label>Journal</label>
						<input className="form-control" 
							type='text'
							name='journal'
							placeholder='Journal'
							value = { journal }
							onChange={ handleInputChange }
						/>
					</div>
				</div>
				<div className="row">
					<div className="col mb-3">
							<label> Date </label>
							<input className="form-control" 
								type='date'
								min ='1900-01-01'
								name='yearMonth'
								value = { yearMonth }
								onChange={ handleInputChange }
							/>
					</div>
					<div className="col mb-3">
						<label> Volume </label>
						<input className="form-control" 
							type='text'
							name='volume'
							placeholder='Volume'
							value = { volume }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label>Number</label>
						<input className="form-control" 
							type='text'
							name='number'
							placeholder='Number'
							value = { number }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label>Pages</label>
						<input className="form-control" 
							type='text'
							name='pages'
							placeholder='Pages'
							value = { pages }
							onChange={ handleInputChange }
						/>
					</div>
				</div>
				<div className="row">
					<div className="col mb-3">
						<label>Publisher</label>
						<input 
							className="form-control" 
							type='text'
							name='publisher'
							placeholder='Publisher'
							value = { publisher }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label> Address </label>
						<input className="form-control" 
							type='text'
							name='address'
							placeholder='Address'
							value = { address }
							onChange={ handleInputChange }
						/>
					</div>
				</div>
				<div className="row">
					<div className="col mb-3">
						<label> Howpublished </label>
						<input className="form-control" 
							type='text'
							name='howpublished'
							placeholder='Howpublished'
							value = { howpublished }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label>Booktitle</label>
						<input className="form-control" 
							type='text'
							name='booktitle'
							placeholder='Booktitle'
							value = { booktitle }
							onChange={ handleInputChange }
						/>
					</div>

				</div>
				<div className="row">
					<div className="col mb-3">
						<label> Editor </label>
						<input className="form-control" 
							type='text'
							name='editor'
							placeholder='Editor'
							value = { editor }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label> Series </label>
						<input className="form-control" 
							type='text'
							name='series'
							placeholder='Series'
							value = { series }
							onChange={ handleInputChange }
						/>
					</div>
					
				</div>
				<div className="row">
					<div className="col mb-3">
						<label> Organization</label>
						<input className="form-control" 
							type='text'
							name='organization'
							placeholder='Organization'
							value = { organization }
							onChange={ handleInputChange }
						/>
					</div>
					<div className="col mb-3">
						<label> School </label>
						<input className="form-control" 
							type='text'
							name='school'
							placeholder='School'
							value = { school }
							onChange={ handleInputChange }
						/>
				</div>
				</div>
				<div className="row">
					<div className="col mb-3">
						<label> Note </label>
						<input className="form-control" 
							type='text'
							name='note'
							placeholder='Note'
							value = { note }
							onChange={ handleInputChange }
						/>
					</div>
					
					<div className="col mb-3">
						<label> Institution </label>
						<input className="form-control" 
							type='text'
							name='institution'
							placeholder='Institution'
							value = { institution }
							onChange={ handleInputChange }
						/>
					</div>
				</div>
				<button
					className="btn2 btn-primary btn-large btn-block"
					type="submit"					
				>
					Agregar
				</button>
				
			</form>
		</div>
    )
}
