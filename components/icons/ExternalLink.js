function ExternalLink({width, height}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-${width} h-${height}`}>
            <path d="M21 13v10H0V4h12v2H2v15h17v-8h2zm3-12H13.012l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07L24 12V1z"></path>
        </svg>
    );
}

export default ExternalLink;
