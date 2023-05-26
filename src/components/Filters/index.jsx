import React, {useState} from "react";
import {ListFilterWithTypes} from '../../containers/ListFilterWithTypes';
import {RangesFilter} from '../RangesFilter';
import './styles';
import {Section} from "./styles";

export const Filters = ({ handleFilter }) => {
    const [openTypes, setOpenTypes] = useState(false);
    const [openAttack, setOpenAttack] = useState(false);
    const [openExperience, setOpenExperience] = useState(false);

    const handleOpenTypes = () => {
        setOpenTypes(!openTypes);
        setOpenAttack(false);
        setOpenExperience(false);
    }

    const handleOpenAttack = () => {
        setOpenAttack(!openAttack);
        setOpenTypes(false);
        setOpenExperience(false);
    }

    const handleOpenExpecience = () => {
        setOpenExperience(!openExperience);
        setOpenTypes(false);
        setOpenAttack(false);
    }

    return (
        <Section>
            <ListFilterWithTypes open={openTypes} handleOpen={handleOpenTypes} handleFilter={handleFilter} />
            <RangesFilter name='Attack' open={openAttack} handleOpen={handleOpenAttack} handleFilter={handleFilter} />
            <RangesFilter name='Experience' open={openExperience} handleOpen={handleOpenExpecience} handleFilter={handleFilter} />
        </Section>
    );
}