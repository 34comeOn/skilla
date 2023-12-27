import React from "react";
import {render, screen} from '@testing-library/react';
import { MenuButton } from ".";
import Pay from 'src/accets/icons/pay.svg';

describe('menu button',()=>{
    it('Компонент MenuButton отображается корректно', ()=> {
        render(
            <MenuButton title='Оплата' alt='pay' icon={Pay} buttonPadding='30px'/>
        )

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Оплата')).toBeInTheDocument();
        expect(screen.queryByText('Не валидно')).not.toBeInTheDocument();
    })

})