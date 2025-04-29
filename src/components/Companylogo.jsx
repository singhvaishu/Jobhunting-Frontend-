import React from 'react';
import VodafoneLogo from '../assets/clogo/vodafone.png';
import IntelLogo from '../assets/clogo/intel.png';
import TeslaLogo from '../assets/clogo/tesla.png';
import AmdLogo from '../assets/clogo/amdc.svg';
import TalkitLogo from '../assets/clogo/talkit.svg';

const CompanyLogosVector = () => {
    const logos = [
        { src: VodafoneLogo, alt: 'Vodafone Logo' },
        { src: IntelLogo, alt: 'Intel Logo' },
        { src: TeslaLogo, alt: 'Tesla Logo' },
        { src: AmdLogo, alt: 'AMD Logo' },
        { src: TalkitLogo, alt: 'Talkit Logo' },
    ];

    return (
        <section
            style={{
                backgroundColor: 'transparent',
                paddingTop: 40,
                paddingBottom: 40,
            }}
        >
            <div
                style={{
                    maxWidth: 1194,
                    margin: '0 auto',
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
            >
                <p
                    style={{
                        fontFamily: "'Epilogue', sans-serif",
                        fontWeight: 400,
                        fontSize: 18,
                        lineHeight: '160%',
                        color: '#888',
                        textAlign: 'left',
                        marginBottom: '32px',
                    }}
                >
                    Companies we helped grow
                </p>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 32,
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            style={{
                                flex: '1 1 120px',
                                maxWidth: 180,
                                minWidth: 100,
                                height: 40,
                                opacity: 0.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogosVector;
