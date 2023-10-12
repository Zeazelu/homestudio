import React from "react";
import './MachineCard.css';
import { machine } from "../../data/Machines";
import Machine from "./Machine/Machine";

function MachineCard() {
    return (
        <div className="machinecard__container">
            <div className="machinecard__wrapper">
                {machine.map(item => (
                    <Machine 
                        name = {item.name}
                        image = {item.image}
                        detail = {item.detail}
                        description = {item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default MachineCard;