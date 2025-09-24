import "./custom-radio.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context/theme-context";

const CustomRadio = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='radio__wrapper'>
            <div className='radio__labels'>
                <label htmlFor='dark'>1</label>
                <label htmlFor='light'>2</label>
                <label htmlFor='purple'>3</label>
            </div>
            <div className='radio__container'>
                <span className='radio__text'>THEME</span>
                <div className='radio__background'>
                    <input 
                        type='radio'
                        name='theme'
                        title='dark'
                        id='dark'
                        value='dark'
                        checked={theme === 'dark'}
                        onChange={() => setTheme('dark')}
                        className='radio__input'
                    />
                    <input 
                        type='radio'
                        name='theme'
                        title='light'
                        id='light'
                        value='light'
                        checked={theme === 'light'}
                        onChange={() => setTheme('light')}
                        className='radio__input'
                    />
                    <input 
                        type='radio'
                        name='theme'
                        title='purple'
                        id='purple'
                        value='purple'
                        checked={theme === 'purple'}
                        onChange={() => setTheme('purple')}
                        className='radio__input'
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomRadio;