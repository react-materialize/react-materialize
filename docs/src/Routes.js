import FormalInformal from './components/grammar-sections/FormalInformal';
import ImpersonalPronouns from './components/grammar-sections/ImpersonalPronouns';
import PersonalPronouns from './components/grammar-sections/PersonalPronouns';
import Pronunciation from './components/grammar-sections/Pronunciation';
import Verbs from './components/grammar-sections/Verbs';
import WordOrder from './components/grammar-sections/WordOrder';

export default [
  {
    title: 'Pronouns',
    routes: [
      {
        title: 'Personal pronouns',
        path: '/personal-pronouns',
        component: PersonalPronouns
      },
      {
        title: 'Impersonal pronouns',
        path: '/impersonal-pronouns',
        component: ImpersonalPronouns
      }
    ]
  },
  {
    title: 'Verbs',
    routes: [
      {
        title: 'Regular and Irregular | Present tense',
        path: '/regular-irregular',
        component: Verbs
      }
    ]
  },
  {
    title: 'Sentence structure',
    routes: [
      {
        title: 'Word order',
        path: '/word-order',
        component: WordOrder
      }
    ]
  },
  {
    title: 'Language in use',
    routes: [
      {
        title: 'Formal/informal forms of address',
        path: '/formal-informal',
        component: FormalInformal
      },
      {
        title: 'Pronunciation',
        path: '/pronunciation',
        component: Pronunciation
      }
    ]
  }
];
