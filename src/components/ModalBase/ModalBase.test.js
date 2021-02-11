import { render, screen } from '@testing-library/react';
import { Button } from '../Button/Button';
import { ModalBase } from './ModalBase';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe("All tests of ModalBase", () => {

    configure({ adapter: new Adapter() });

    test('render Modal', () => {
        const props = {
            header: "Addition to cart!",
            text: "This product will be added to your cart.",
            textConfirm: "Are you sure want to add a product to your shopping card?",
            closeButton: true,
            bgColorHeader: "#0061c2",
            bgColorBody: "#047ef8",
            bgColorFooter: "#047ef8",
            bgInfo: "#0061c2",
            onClose: () => { },
            onConfirm: () => { },
        }
        render(<ModalBase {...props} />);
    });


    test('render ModalBase', () => {
        const props = {
            header: "Addition to cart!",
            text: "This product will be added to your cart.",
            textConfirm: "Are you sure want to add a product to your shopping card?",
            closeButton: true,
            bgColorHeader: "#0061c2",
            bgColorBody: "#047ef8",
            bgColorFooter: "#047ef8",
            bgInfo: "#0061c2",
            onClose: () => { },
            onConfirm: () => { },
        }
        render(<ModalBase {...props} />);
        const modalBase = screen.getByText('This product will be added to your cart.')
        expect(modalBase).toBeDefined();
        expect(modalBase).toBeTruthy();
    });


    test('check two button in Modal', () => {
        const wrapper = shallow(<ModalBase />);
        expect(wrapper.find(Button)).toHaveLength(2);
    })
});