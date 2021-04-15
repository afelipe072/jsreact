import ComponenteParcial from '../../components/ComponenteParcial'
//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'


//Andrés Felipe Rojas
//1741787


//Prueba boton sumar se le pasa 20,10 y Felipe

test('Simular click boton sumar',() => {
    const wrapper = shallow(<ComponenteParcial numero1={20} numero2={10} nombre='Felipe' />)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const contando = wrapper.find('h3').text().trim()
    expect(contando).toBe('Señor Felipe la suma es: 30')
  
  })

  //Prueba boton restar se le pasa 20,10 y Andrés

test('Simular click boton restar',() => {
    const wrapper = shallow(<ComponenteParcial numero1={20} numero2={10} nombre='Andrés' />)
    const btn1 = wrapper.find('button').at(1).simulate('click')
    const contando = wrapper.find('h3').text().trim()
    expect(contando).toBe('Señor Andrés la resta es: 10')
  
  })