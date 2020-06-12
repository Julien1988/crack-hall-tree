/* creation du model button pour l'app arbre
 * /src/components/tools/button.js - model button
 * code by sarahG4000 for becode formation
 * creation for montagne
 * creat 25/05/2020
 */

// import {NBSP} from "./constants";
import Button from "./button";
import PropType from "prop-types";
import React from "react";
import "../scss/roots.scss";

const ToolsInfo = ({onInfo}) => (
    <div className={"border-sg"}>
        <Button
            label={"Profile"}
            title={"Info du profile en question"}
            disabled={onclick}
            onClick={onInfo}
        />
    </div>
);

ToolsInfo.propType = {
    onInfo: PropType.func.isRequired,
};

export default ToolsInfo;
