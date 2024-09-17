export const value = `[
    { 'trigger': 'next', 'source': 'start', 'dest': 'valid_acts' },
    { 'trigger': 'next', 'source': 'valid_acts', 'dest': 'obl_siren' },
    { 'trigger': 'next', 'source': 'obl_siren', 'dest': 'ask_for_inpi' },
    { 'trigger': 'next', 'source': 'ask_for_inpi', 'dest': 'obl_etat_associe_unique', 'conditions': 'qualite_associe_unique' },
    { 'trigger': 'next', 'source': 'ask_for_inpi', 'dest': 'opt_qualite_associe_unique', 'condition': 'qualite_associe_non_unique' },
    { 'trigger': 'next', 'source': 'opt_qualite_associe_unique', 'dest': 'obl_etat_associe_unique' },
    { 'trigger': 'next', 'source': 'ask_for_inpi', 'dest': 'generation_impossible_eurl', 'condition': 'est_eurl' },
    { 'trigger': 'next', 'source': 'obl_etat_associe_unique', 'dest': 'type_personne' },
    { 'trigger': 'next', 'source': 'type_personne', 'dest': 'opt_adresse_personne_physique_associe_unique' },
    { 'trigger': 'next', 'source': 'opt_adresse_personne_physique_associe_unique', 'dest': 'adresse_personne_physique_associe_unique' },
    { 'trigger': 'next', 'source': 'adresse_personne_physique_associe_unique', 'dest': 'opt_adresse_personne_morale_associe_unique' },
    { 'trigger': 'next', 'source': 'opt_adresse_personne_morale_associe_unique', 'dest': 'adresse_personne_morale_associe_unique' }
]`

export function strToMermaid(str) {
    str = str.replace(/'/g, '"')
    try {
        const value = JSON.parse(str)
        let res = `graph TB\n`
        if (Array.isArray(value)) {
            for (let transition of value) {
                if (transition.condition) {
                    res += `${transition.source} -->|${transition.condition}| ${transition.dest}\n`
                }
                res += `${transition.source} --> ${transition.dest}\n`
            }
        }
        console.log(res)
        return res
    } catch (e) { }

    return ''

}