import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCarta ejp: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejp: ['A','J','Q','K']
 * @returns {Array} regresa un nuevo Deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || !tiposDeCarta.length > 0)  throw new Error('TiposDeCarta es obligatorio y tiene que ser un arreglo de strings');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}
