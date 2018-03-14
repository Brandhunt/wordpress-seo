import React from "react";

/**
 * The Yoast SEO traffic light icon.
 *
 * @param {object} props The props object.
 *
 * @returns {ReactElement} The svg icon.
 */
const YoastSeoIcon = ( props ) => (
	<svg { ...props } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 488.22">
		<path d="M436.82 4.06A90 90 0 0 0 410 0H90A90 90 0 0 0 0 90v270a90 90 0 0 0 90 90h410V90a90 90 0 0 0-63.18-85.94z" fill="#a4286a"/>
		<path d="M436.82 4.06L184.15 450H500V90a90 90 0 0 0-63.18-85.94z" fill="#6c2548"/>
		<path d="M74.4 339.22v34.93c21.63-.85 38.51-8 52.84-22.46 14.76-14.83 27.45-38 39.93-72.85l92.53-248H215l-74.6 207.07-37.09-116.15h-41l54.42 139.79a57.49 57.49 0 0 1 0 41.84c-5.52 14.2-15.35 30.88-42.33 35.83z" fill="#fff"/>
		<circle cx="368.33" cy="124.68" r="97.34" transform="rotate(-45 368.335 124.68)" fill="#9fda4f"/>
		<path d="M416.2 39.93l-95.74 169.51A97.34 97.34 0 1 0 416.2 39.93z" fill="#77b227"/>
		<path d="M294.78 254.75l-.15-.08-.13-.07a63.6 63.6 0 0 0-62.56 110.76h.13a63.6 63.6 0 0 0 62.71-110.67z" fill="#fec228"/>
		<path d="M294.5 254.59l-62.56 110.76a63.6 63.6 0 1 0 62.56-110.76z" fill="#f49a00"/>
		<path d="M222.31 450.07A38.16 38.16 0 0 0 203 416.83a38.18 38.18 0 1 0 19.41 33.27z" fill="#ff4e47"/>
		<path d="M202.9 416.8l-37.54 66.48a38.17 38.17 0 0 0 37.54-66.48z" fill="#ed261f"/>
	</svg>
);

export default YoastSeoIcon;
