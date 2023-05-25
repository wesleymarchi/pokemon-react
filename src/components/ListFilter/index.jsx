import React, {useState} from 'react';
import './styles';
import { MdExpandMore, MdKeyboardArrowUp } from 'react-icons/md';

export const ListFilter = (props) => {
    const {
        data: {
            loading,
            error,
            pokemonsTypesCatalog = []
        },
        open,
        handleOpen,
        handleFilter
    } = props;

    const [type, setType] = useState('type');

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: Sorry there was a problem</p>
    }

    const handleCheck = (e) => {
        e.target.checked = false;
        handleOpen();

        if (e.target.value === 'no-type') {
            setType('type');
            handleFilter({});

            return
        }

        setType(e.target.value);
        handleFilter({ type1_Name: e.target.value });
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleOpen();
            const value = event.target.children[0].value;

            if (value === 'no-type') {
                setType('type');
                handleFilter({});

                return
            }

            setType(value);
            handleFilter({ type1_Name: value });
        }
    }

    return (
        <Dl display={!open ? 'none' : document.documentElement.clientWidth <= 425 ? 'grid' : 'flex'}>
            <dt>
                <FilterContainer onClick={handleOpen}>
                    <label>
                        <p>{type}</p>
                    </label>
                    {open
                        ? <Arrow aria-label='Up'><MdKeyboardArrowUp /> </Arrow>
                        : <Arrow aria-label='Down'> <MdExpandMore /></Arrow>}
                </FilterContainer>
            </dt>
            <dd>
                <ul>
                    {pokemonsTypesCatalog
                        .map(({ id, name }) =>
                            <label tabIndex='0' id={id} key={id} onKeyPress={handleKeyPress}>
                                <input tabIndex='-1' type='checkbox' htmlFor={id} value={name} onChange={handleCheck} />{name}
                            </label>
                        )}
                </ul>
            </dd>
        </Dl>
    )
}
