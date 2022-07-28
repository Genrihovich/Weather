//функція робить логіку з Header-a
export function changeSCCRootVariables(theme) {
    const root = document.querySelector(':root');

    const components = [
        'card-shadow',
        'card-background',
        'components-background',
        'body-background',
        'text-color',
    ];
    components.forEach(component => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        );
    });

}