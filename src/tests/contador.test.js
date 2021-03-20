import Contador from '../contador'
//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'



describe('Pruebas sobre el componente contador',()=>{

   test('Buscar parrafo',()=>{
  // const { getByText } = render(<Contador propNum={0}/>)
  //  expect( getByText('HOLA SOY CONTADOR')).toBeInTheDocument()

   })


   test('Probando con enzyme', ()=>{

    const wrapper = shallow(<Contador propNum={0} />)
    expect(wrapper).toMatchSnapshot()

})


test('Busando parrafo en el componente', ()=>{

    const wrapper = shallow(<Contador propNum={0} />)
    const textoparrado = wrapper.find('p').text()
    const textoenparra = 'HOLA SOY CONTADOR Fredy'

    expect(textoenparra).toBe(textoparrado)
    
    //expect(wrapper).toMatchSnapshot()

})

test('Traer button',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn1 = wrapper.find('button').at(0)
    console.log(btn1.html())
  })


  test('Simular click boton suma',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toBe('11')
  
  })
  //Prueba boton resta: se le pasa 10 se simula clic y debe devolver 9
  test('Simular click boton resta',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn2 = wrapper.find('button').at(1).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toBe('9')
  
  })

  //Prueba boton reset:se le pasa 10 se simula clic y debe devolver 10 
  test('Simular click boton reset',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn3 = wrapper.find('button').at(2).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toBe('10')
  
  })
  
  


})