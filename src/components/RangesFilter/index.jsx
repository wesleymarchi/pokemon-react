import React, { useState } from 'react';
import { FilterContainer } from '../ListFilter/styles';
import { MdKeyboardArrowUp, MdExpandMore } from 'react-icons/md';
import { Dl, Arrow } from './styles';
// import { Tag } from '../Tag'

export const RangesFilter = (props) => {
    const {
        name,
        open,
        handleOpen,
        handleFilter
    } = props;

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [error, setError] = useState('');

    const handleFrom = (e) => setFrom(e.target.value);
    const handleTo = (e) => setTo(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (from > to || !from || !to) {
            setError('Error');
            return
        }
        name === 'Attack'
            ? handleFilter({ attack_Gt: from, attack_Lt: to })
            : handleFilter({ experienceGrowth_Gt: from, experienceGrowth_Lt: to })
        setFrom('');
        setTo('');
        handleOpen();
    }

    return (
        <Dl display={open ? 'flex' : 'none'}>
            <dt>
                <FilterContainer onClick={handleOpen}>
                    <label>
                        <p>{name}</p>
                    </label>
                    {open
                        ? <Arrow aria-label='Up'><MdKeyboardArrowUp /></Arrow>
                        : <Arrow aria-label='Down'><MdExpandMore /></Arrow>}
                </FilterContainer>
            </dt>
            <dd>
                <form onSubmit={handleSubmit}>
                    {error &&
                        <>
                            <p>{error}</p>
                            <br />
                        </>}
                    <label>From
                        <input tabIndex='0' type='number' placeholder='Min value' value={from} onChange={handleFrom} />
                    </label>
                    <label>To
                        <input tabIndex='0' type='number' placeholder='Max value' value={to} onChange={handleTo} />
                    </label>
                    <button tabIndex='0' type='submit'>Apply</button>
                </form>
            </dd>
        </Dl>
    );
}
