const abrirConversa = numero => {
    const link = document.createElement('a');
    link.setAttribute('href', `whatsapp://send?phone=${numero}`);
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
}

abrirConversa('5583988887777');
