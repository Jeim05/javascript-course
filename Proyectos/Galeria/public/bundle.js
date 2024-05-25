'use strict';

var datos = {
	fotos: {
		america: [
			{
				id: 1,
				nombre: 'America 1',
				descripcion:
					'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/1.jpg',
			},
			{
				id: 2,
				nombre: 'America 2',
				descripcion:
					'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/2.jpg',
			},
			{
				id: 3,
				nombre: 'America 3',
				descripcion:
					'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/3.jpg',
			},
			{
				id: 4,
				nombre: 'America 4',
				descripcion:
					'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/4.jpg',
			},
			{
				id: 5,
				nombre: 'America 5',
				descripcion:
					'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/5.jpg',
			},
			{
				id: 6,
				nombre: 'America 6',
				descripcion:
					'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/6.jpg',
			},
			{
				id: 7,
				nombre: 'America 7',
				descripcion:
					'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/7.jpg',
			},
			{
				id: 8,
				nombre: 'America 8',
				descripcion:
					'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/8.jpg',
			},
			{
				id: 9,
				nombre: 'America 9',
				descripcion:
					'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/9.jpg',
			},
			{
				id: 10,
				nombre: 'America 10',
				descripcion:
					'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/10.jpg',
			},
		],
		europa: [
			{
				id: 11,
				nombre: 'Europa 1',
				descripcion:
					'Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/1.jpg',
			},
			{
				id: 12,
				nombre: 'Europa 2',
				descripcion:
					'Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/2.jpg',
			},
			{
				id: 13,
				nombre: 'Europa 3',
				descripcion:
					'Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/3.jpg',
			},
			{
				id: 14,
				nombre: 'Europa 4',
				descripcion:
					'Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/4.jpg',
			},
			{
				id: 15,
				nombre: 'Europa 5',
				descripcion:
					'Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/5.jpg',
			},
			{
				id: 16,
				nombre: 'Europa 6',
				descripcion:
					'Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/6.jpg',
			},
			{
				id: 17,
				nombre: 'Europa 7',
				descripcion:
					'Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/7.jpg',
			},
			{
				id: 18,
				nombre: 'Europa 8',
				descripcion:
					'Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/8.jpg',
			},
			{
				id: 19,
				nombre: 'Europa 9',
				descripcion:
					'Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/9.jpg',
			},
			{
				id: 20,
				nombre: 'Europa 10',
				descripcion:
					'Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/10.jpg',
			},
		],

		africa: [
			{
				id: 21,
				nombre: 'África 1',
				descripcion:
					'África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/1.jpg',
			},
			{
				id: 22,
				nombre: 'África 2',
				descripcion:
					'África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/2.jpg',
			},
			{
				id: 23,
				nombre: 'África 3',
				descripcion:
					'África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/3.jpg',
			},
			{
				id: 24,
				nombre: 'África 4',
				descripcion:
					'África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/4.jpg',
			},
			{
				id: 25,
				nombre: 'África 5',
				descripcion:
					'África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/5.jpg',
			},
			{
				id: 26,
				nombre: 'África 6',
				descripcion:
					'África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/6.jpg',
			},
			{
				id: 27,
				nombre: 'África 7',
				descripcion:
					'África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/7.jpg',
			},
			{
				id: 28,
				nombre: 'África 8',
				descripcion:
					'África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/8.jpg',
			},
			{
				id: 29,
				nombre: 'África 9',
				descripcion:
					'África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/9.jpg',
			},
			{
				id: 30,
				nombre: 'África 10',
				descripcion:
					'África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/10.jpg',
			},
		],
		asia: [
			{
				id: 31,
				nombre: 'Asia 1',
				descripcion:
					'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/1.jpg',
			},
			{
				id: 32,
				nombre: 'Asia 2',
				descripcion:
					'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/2.jpg',
			},
			{
				id: 33,
				nombre: 'Asia 3',
				descripcion:
					'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/3.jpg',
			},
			{
				id: 34,
				nombre: 'Asia 4',
				descripcion:
					'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/4.jpg',
			},
			{
				id: 35,
				nombre: 'Asia 5',
				descripcion:
					'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/5.jpg',
			},
			{
				id: 36,
				nombre: 'Asia 6',
				descripcion:
					'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/6.jpg',
			},
			{
				id: 37,
				nombre: 'Asia 7',
				descripcion:
					'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/7.jpg',
			},
			{
				id: 38,
				nombre: 'Asia 8',
				descripcion:
					'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/8.jpg',
			},
			{
				id: 39,
				nombre: 'Asia 9',
				descripcion:
					'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/9.jpg',
			},
			{
				id: 40,
				nombre: 'Asia 10',
				descripcion:
					'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/10.jpg',
			},
		],
		oceania: [
			{
				id: 41,
				nombre: 'Oceania 1',
				descripcion:
					'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/1.jpg',
			},
			{
				id: 42,
				nombre: 'Oceania 2',
				descripcion:
					'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/2.jpg',
			},
			{
				id: 43,
				nombre: 'Oceania 3',
				descripcion:
					'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/3.jpg',
			},
			{
				id: 44,
				nombre: 'Oceania 4',
				descripcion:
					'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/4.jpg',
			},
			{
				id: 45,
				nombre: 'Oceania 5',
				descripcion:
					'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/5.jpg',
			},
			{
				id: 46,
				nombre: 'Oceania 6',
				descripcion:
					'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/6.jpg',
			},
			{
				id: 47,
				nombre: 'Oceania 7',
				descripcion:
					'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/7.jpg',
			},
			{
				id: 48,
				nombre: 'Oceania 8',
				descripcion:
					'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/8.jpg',
			},
			{
				id: 49,
				nombre: 'Oceania 9',
				descripcion:
					'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/9.jpg',
			},
			{
				id: 50,
				nombre: 'Oceania 10',
				descripcion:
					'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/10.jpg',
			},
		],
		antartida: [
			{
				id: 51,
				nombre: 'Antártida 1',
				descripcion:
					'Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/1.jpg',
			},
			{
				id: 52,
				nombre: 'Antártida 2',
				descripcion:
					'Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/2.jpg',
			},
			{
				id: 53,
				nombre: 'Antártida 3',
				descripcion:
					'Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/3.jpg',
			},
			{
				id: 54,
				nombre: 'Antártida 4',
				descripcion:
					'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/4.jpg',
			},
			{
				id: 55,
				nombre: 'Antártida 5',
				descripcion:
					'Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/5.jpg',
			},
			{
				id: 56,
				nombre: 'Antártida 6',
				descripcion:
					'Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/6.jpg',
			},
			{
				id: 57,
				nombre: 'Antártida 7',
				descripcion:
					'Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/7.jpg',
			},
			{
				id: 58,
				nombre: 'Antártida 8',
				descripcion:
					'Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/8.jpg',
			},
			{
				id: 59,
				nombre: 'Antártida 9',
				descripcion:
					'Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/9.jpg',
			},
		],
	},
};

const { fotos } = datos;

var dataCategorias = {
  categorias: [
    {
      id: "america",
      nombre: "America",
      numeroFotos: fotos["america"].length,
      imagenPortada: "./img/america.jpg",
    },
    {
      id: "europa",
      nombre: "Europa",
      numeroFotos: fotos["europa"].length,
      imagenPortada: "./img/europa.jpg",
    },
    {
      id: "africa",
      nombre: "África",
      numeroFotos: fotos["africa"].length,
      imagenPortada: "./img/africa.jpg",
    },
    {
      id: "asia",
      nombre: "Asia",
      numeroFotos: fotos["asia"].length,
      imagenPortada: "./img/asia.jpg",
    },
    {
      id: "oceania",
      nombre: "Oceania",
      numeroFotos: fotos["oceania"].length,
      imagenPortada: "./img/oceania.jpg",
    },
    {
      id: "antartida",
      nombre: "Antártida",
      numeroFotos: fotos["antartida"].length,
      imagenPortada: "./img/antartida.jpg",
    },
  ],
};

const { categorias } = dataCategorias; // Aqui puedo extraer directamente las categorias

// En el archivo index.html tenemos un contenedor con ese id, por lo tanto hacemos la referencia de la siguiente manera
const contenedorCategorias$1 = document.getElementById("categorias");

// Con el metodo forEach recorremos el arreglo para ejecutar una accion por cada categoria.
categorias.forEach((categoria) => {
  // Para poder visualizar cada una de las categorias, se crea el elemento html. de la siguiente forma
  const nuevaCategoria = document.createElement("a"); // En los parametros se indica la etiqueta que qeremos crear
  const plantilla = `
  <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
	<div class="categoria__datos">
    <p class="categoria__nombre">${categoria.nombre}</p>
		<p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
	</div>
    `;

  nuevaCategoria.innerHTML = plantilla; // Como ya tengo la etiqueta a, le decimos que su codigo interno corresponde al que asignamos a la plantilla
  nuevaCategoria.classList.add("categoria"); // Aqui le agregamos la clase categoria a la equiqueta a que engloba toda la categoria
  nuevaCategoria.href = "#"; // Accedemos al href de la categoria y le decimos que su enlace es #
  nuevaCategoria.dataset.categoria = categoria.id; // Indicamos que el atributo personalizado tenga el valor de categoria.id

  // Con lo que hemos echo arriba no lo hemos agregado al DOM, lo unico que hemos echo es definir la estructura
  // por lo tanto para agregarlo al DOM, lo hacemos de la siguiente manera
  contenedorCategorias$1.append(nuevaCategoria);
});

const galeria$4 = document.getElementById("galeria"); // Accedemos a la galeria

const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria$4.querySelector(".galeria__imagen").src = ruta; // Dentro de la galeria voy a buscar la imagen activa
  galeria$4.querySelector(".galeria__imagen").dataset.idImagen = id; // Accedemos a un atributo personalizado
  galeria$4.querySelector(".galeria__titulo").innerText = nombre; // Aqui vamos a asignar el titulo de la galeria, en el h3
  galeria$4.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion; // Aqui vamos a poner la descripción de la imagen

  const categoriaActual = galeria$4.dataset.categoria;
  const fotos = datos.fotos[categoriaActual]; // Accedemos a la categoria dentro de la data. Se busque por medio de
  //la categoria actual que viene desde el dataset

  // Por cada foto vamos a acceder a la informacion
  let indexImagenActual; // Definimos esta variable para acceder a la posición de la foto
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index; // Se asigna el index a la variable creada
    }
  });

  // MARCAMOS LA IMAGEN DEL CAROUSEL COMO ACTIVA
  if (galeria$4.querySelectorAll(".galeria__carousel-slide").length > 0) {
    // Se hace la validacion para evitar que de un error a la hora de cargar el slide por primera vez

    // ELIMINAMOS LA CLASE ACTIVE DE CUALQUIER SLIDE
    galeria$4
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    /* Busca dentro de la galeria la imagen especificada y se le asigna la clase que tiene el borde, 
    para que cambie cuando se seleccione*/
    galeria$4
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

// CREAMOS UNA FUNCION PARA CARGAR LA ANTERIOR O SIGUIENTE IMAGEN
const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria$4.dataset.categoria;
  const fotos = datos.fotos[categoriaActual];

  // Accedemos al id de la imagen que esta abierta en ese momento
  const idImagenActual = parseInt(
    galeria$4.querySelector(".galeria__imagen").dataset.idImagen
  );

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      // Se debe hacer la conversion del dataset idImagen, ya que viene com cadena
      indexImagenActual = index;
    }
  });

  if (direccion == "siguiente") {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === "anterior") {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

/* En este parte lo que hacemos es darle un evento a las categorias
en este caso para ver más imagenes y información de cada uno de los continentes
*/
//Primero, accedemos al contenedor de las categorias
const contenedorCategorias = document.getElementById("categorias");
const galeria$3 = document.getElementById("galeria");

// Segundo agregamos el evento al elemento hijo de ese contenedor
// Se recibo el evento y una función con el parametro de evento
contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault(); // Previene el comportamiento que tiene por defecto el navegador. Con esto ya no me va a enviar a la parte superior del navegador

  if (e.target.closest("a")) {
    galeria$3.classList.add("galeria--active"); // Se agrega la clase que activa la galeria
    document.body.style.overflow = "hidden"; // Esto es para evitar que no se haga scroll, en la pagina de la galeria.

    const categoriaActiva = e.target.closest("a").dataset.categoria; // Aqui, agregamos closest() para evitar que si damos en el texto de la imagen, genere un problema en el slide
    galeria$3.dataset.categoria = categoriaActiva; // Esto lo hacemos para poder cambiar de imagen en el slide. Lo que hacemos es crear un atributo personalizado

    const fotos = datos.fotos[categoriaActiva];
    const carousel = galeria$3.querySelector(".galeria__carousel-slides"); // Se busca el elemento del carousel
    
    const {id, nombre, ruta, descripcion} = fotos[0];
    // Despues de cargar la galeria voy a cargar la imagen activa
    cargarImagen(id, nombre, ruta, descripcion);

    carousel.innerHTML = ""; // Antes de cargar las fotos, accedemos al carousel al HTML interno y lo dejamos vacio, para cargar las otras imagenes

    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="${foto.nombre}" />
        </a>
            `;
      galeria$3.querySelector(".galeria__carousel-slides").innerHTML += slide; // Al trabajar con querySelector la clase lleva un . antes
    });

    galeria$3
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});
//e.target; // El target es el objetivo al que le dimos click
//e.target.closest('a') // Aqui le indicamos que solo busque las etiquteas a, en caso de dar click fuera de un a, devuelve null

const galeria$2 = document.getElementById("galeria");

const cerrarGaleria = () => {
  galeria$2.classList.remove("galeria--active");
  document.body.style.overflow = "";
};

// En esta funcion lo que hacemos es que al hacer click sobre cualquier imagen del slide dentro de las categorias
// pse abra la imagen en grande con su respectiva información
const slideClick = (e) => {
  let ruta, nombre, descripcion; // datos necesarios para hacer la busqueda de la imagen

  const id = parseInt(e.target.dataset.id); // Convertimos el id del dataset en un entero, ya que este viene como texto y el id de la imagen es un numero
  const galeria = document.getElementById("galeria"); // se recupera el contenedor de la galeria, para hacer las referencias
  const categoriaActiva = galeria.dataset.categoria; // se obtiene la categoria de la galeria donde entramos. 

  datos.fotos[categoriaActiva].forEach((foto) => { // Se hace un recorrido de todas las fotos en la categoria seleccionada
    if (foto.id === id) { // para luego hacer la comparación de la imagen a la que hicimos click por medio del id
      ruta = foto.ruta; // se asignan los datos recuperados a cada variable
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  cargarImagen(id, nombre, ruta, descripcion); // Se carga la imagen seleccionada en grande. Esta funcion se reutiliza
};

const galeria$1 = document.getElementById("galeria");

const carousel = (direccion) => {
  // Creamos un objeto de opciones para utilizar para crear el observer
  const opciones = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9,
  };

  // Con el observer vamos a tomar las imagenes visibles del slide
  const observer = new IntersectionObserver((entradas) => {
    const slidesVisibles = entradas.filter((entrada) => {
      // Vamos a guardar dentro de ese arreglo los elementos que son visibles
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    if (direccion === "atras") {
      const primerSlideVisible = slidesVisibles[0];
      const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

      if (indexPrimerSlideVisible >= 1) {
        entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    } else if (direccion === "adelante") {
      const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1];
      const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);

      /* Ahora lo que vamos a hacer es pasar esa ultima imagen que no estaba visible
      al inicio del slide */
      if (entradas.length - 1 > indexUltimoSlideVisible) {
        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }

    const slides = galeria$1.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
      observer.unobserve(slide); // con esta funcion se devuelve todos los elementos que estamos observando
    });
  }, opciones);

  const slides = galeria$1.querySelectorAll(".galeria__carousel-slide");
  slides.forEach((slide) => {
    observer.observe(slide); // con esta funcion se devuelve todos los elementos que estamos observando
  });
};


// FUNCIONALIDADES ADICIONALES A AGREGAR
/*  
* Agregar una funcionalidad para que cuando no haya más slides hacia adelante, la flecha se oculte lo mismo para el de atras 
 * Tambien agregar esa funcionalidad en el boton de siguiente y atras de cada imagen grande
 *  */

const galeria = document.getElementById("galeria");
galeria.addEventListener("click", (e) => {
  const boton = e.target.closest("button");

  // - - - CERRAR GALERIA
  /* Añadimos en el if el signo de interrogacion porque si se da click en un elemento diferente de boton no arroge 
   un error, luego cuando se hace la verificacion de que no es boton se hace la comparación con el data-set que le 
   asigmanos al boton de cerrar galeria.*/
  if (boton?.dataset.accion == "cerrar-galeria") {
    cerrarGaleria();
  }

  // - - - CAROUSEL SLIDE CLICK
  if (e.target.dataset.id) { // Hacemos el condicional, para que en caso que se de click fuera de una imagen del slide, no de un error.
    slideClick(e);
  }

  // - - - SIGUIENTE IMAGEN
  if (boton?.dataset?.accion === 'siguiente-imagen') { // comprobamos primero si hay un boton y luego si tiene un dataset y luego si tiene una accion
    cargarAnteriorSiguiente('siguiente');
  }

  // - - - ANTERIOR IMAGEN
  if (boton?.dataset?.accion === 'anterior-imagen') { // comprobamos primero si hay un boton y luego si tiene un dataset y luego si tiene una accion
    cargarAnteriorSiguiente('anterior');
  }

  // - - - CAROUSEL SIGUIENTE
  if (boton?.dataset?.accion === 'siguiente-slide') { 
    carousel('adelante');
  }

  // - - - CAROUSEL ANTERIOR 
  if (boton?.dataset?.accion === 'anterior-slide') { 
    carousel('atras');
  }

});
