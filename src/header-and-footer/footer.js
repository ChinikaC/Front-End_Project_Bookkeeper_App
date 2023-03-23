import Tippy from "@tippyjs/react";
import React from "react";
import { Tooltip } from "react-tippy";

const Footer = () => {
    return (
        <footer
        style={{
            display:"flex",
            justifyContent:"space-around"
        }}>
            <Tooltip
            title="Too bad ¯\_(ツ)_/¯">
            <p>Need Help?</p>
            </Tooltip>
            <Tooltip
            title="Under Construction">
            <p>Privacy Policy</p>
            </Tooltip>
            <Tooltip
            title="Under Construction">
            <p>Terms of Use</p>
            </Tooltip>
            <Tooltip
            title="Under Construction">
            <p>Follow us on Social Media</p>
            </Tooltip>
            <p>© Book-Keepers 2023</p>
        </footer>

    )
}

export default Footer;