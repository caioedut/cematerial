angular.module('docs').controller('components.accordionCtrl', function ($scope) {
    $scope.$parent.title = 'Accordion';

    $scope.events = {
        'cem.panel.beforeShow': 'Panel content is called to open, but not opened yet',
        'cem.panel.show': 'Panel content is opened',
        'cem.panel.beforeHide': 'Panel content close action is triggered, but not closed yet',
        'cem.panel.hide': 'Panel content is closed'
    };

    $scope.options = [
        {
            name: 'arrow',
            default: 'false',
            values: 'true/false'
        },
        {
            name: 'margin',
            default: 'false',
            values: 'true/false'
        },
        {
            name: 'popout',
            default: 'false',
            values: 'true/false'
        }
    ];

    $scope.codes = {
        basic: (
            '<div class="panel-group">' + "\n" +
            '    <div class="panel panel-arrow">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            Trip to Caribean cruise' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si quae forte-possumus. Explanetur igitur. At ego quem huic anteponam non audeo dicere; Quia dolori non voluptas contraria est, sed doloris privatio. Urgent tamen et nihil remittunt. Huius, Lyco, oratione locuples, rebus ipsis ielunior. Duo Reges: constructio interrete. </p>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="panel-footer">' + "\n" +
            '            <button class="btn btn-flat text-blue-6 bg-blue-0-h">' + "\n" +
            '                Done' + "\n" +
            '            </button>' + "\n" +
            '            <button class="btn btn-flat text-blue-6 bg-blue-0-h">' + "\n" +
            '                Cancel' + "\n" +
            '            </button>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="panel panel-arrow">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            Barbados' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Ita graviter et severe voluptatem secrevit a bono. Ut in geometria, prima si dederis, danda sunt omnia. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Et nemo nimium beatus est; Ne discipulum abducam, times. At, si voluptas esset bonum, desideraret. Hoc est non dividere, sed frangere. Satisne ergo pudori consulat, si quis sine teste libidini pareat? Beatus autem esse in maximarum rerum timore nemo potest. Nihil enim iam habes, quod ad corpus referas; </p>' + "\n" +
            '            <p>Atqui reperies, inquit, in hoc quidem pertinacem; Duo enim genera quae erant, fecit tria. Sed haec nihil sane ad rem; Eadem nunc mea adversum te oratio est. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Id Sextilius factum negabat. Sic enim censent, oportunitatis esse beate vivere. Qui ita affectus, beatum esse numquam probabis; Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. </p>' + "\n" +
            '            <p>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Si enim ita est, vide ne facinus facias, cum mori suadeas. Aliena dixit in physicis nec ea ipsa, quae tibi probarentur; Tum Quintus: Est plane, Piso, ut dicis, inquit. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. </p>' + "\n" +
            '            <p>Iam enim adesse poterit. Dicimus aliquem hilare vivere; At certe gravius. Quod iam a me expectare noli. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Erat enim Polemonis. Nondum autem explanatum satis, erat, quid maxime natura vellet. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; </p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="panel panel-arrow">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            The best cruise line' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Ut aliquid scire se gaudeant? Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Quae similitudo in genere etiam humano apparet. Quod cum dixissent, ille contra. Idemne potest esse dies saepius, qui semel fuit? Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Nemo nostrum istius generis asotos iucunde putat vivere. </p>' + "\n" +
            '            <p>Immo alio genere; Inde sermone vario sex illa a Dipylo stadia confecimus. Ergo id est convenienter naturae vivere, a natura discedere. Idemne, quod iucunde? Sed quot homines, tot sententiae; Si qua in iis corrigere voluit, deteriora fecit. Ea possunt paria non esse. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Sed quot homines, tot sententiae; Aliter enim explicari, quod quaeritur, non potest. Sed tempus est, si videtur, et recta quidem ad me. </p>' + "\n" +
            '            <p>Proclivi currit oratio. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Est enim effectrix multarum et magnarum voluptatum. Sed quae tandem ista ratio est? De illis, cum volemus. Claudii libidini, qui tum erat summo ne imperio, dederetur. Illa argumenta propria videamus, cur omnia sint paria peccata. </p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        margin: (
            '<div class="panel-group">' + "\n" +
            '    <div class="panel panel-arrow panel-margin">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            Trip to Caribean cruise' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si quae forte-possumus. Explanetur igitur. At ego quem huic anteponam non audeo dicere; Quia dolori non voluptas contraria est, sed doloris privatio. Urgent tamen et nihil remittunt. Huius, Lyco, oratione locuples, rebus ipsis ielunior. Duo Reges: constructio interrete. </p>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="panel-footer">' + "\n" +
            '            <button class="btn btn-flat text-blue-6 bg-blue-0-h">' + "\n" +
            '                Done' + "\n" +
            '            </button>' + "\n" +
            '            <button class="btn btn-flat text-blue-6 bg-blue-0-h">' + "\n" +
            '                Cancel' + "\n" +
            '            </button>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="panel panel-arrow panel-margin">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            Barbados' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Ita graviter et severe voluptatem secrevit a bono. Ut in geometria, prima si dederis, danda sunt omnia. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Et nemo nimium beatus est; Ne discipulum abducam, times. At, si voluptas esset bonum, desideraret. Hoc est non dividere, sed frangere. Satisne ergo pudori consulat, si quis sine teste libidini pareat? Beatus autem esse in maximarum rerum timore nemo potest. Nihil enim iam habes, quod ad corpus referas; </p>' + "\n" +
            '            <p>Atqui reperies, inquit, in hoc quidem pertinacem; Duo enim genera quae erant, fecit tria. Sed haec nihil sane ad rem; Eadem nunc mea adversum te oratio est. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Id Sextilius factum negabat. Sic enim censent, oportunitatis esse beate vivere. Qui ita affectus, beatum esse numquam probabis; Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. </p>' + "\n" +
            '            <p>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Si enim ita est, vide ne facinus facias, cum mori suadeas. Aliena dixit in physicis nec ea ipsa, quae tibi probarentur; Tum Quintus: Est plane, Piso, ut dicis, inquit. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. </p>' + "\n" +
            '            <p>Iam enim adesse poterit. Dicimus aliquem hilare vivere; At certe gravius. Quod iam a me expectare noli. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Erat enim Polemonis. Nondum autem explanatum satis, erat, quid maxime natura vellet. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; </p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="panel panel-arrow panel-margin">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            The best cruise line' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Ut aliquid scire se gaudeant? Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Quae similitudo in genere etiam humano apparet. Quod cum dixissent, ille contra. Idemne potest esse dies saepius, qui semel fuit? Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Nemo nostrum istius generis asotos iucunde putat vivere. </p>' + "\n" +
            '            <p>Immo alio genere; Inde sermone vario sex illa a Dipylo stadia confecimus. Ergo id est convenienter naturae vivere, a natura discedere. Idemne, quod iucunde? Sed quot homines, tot sententiae; Si qua in iis corrigere voluit, deteriora fecit. Ea possunt paria non esse. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Sed quot homines, tot sententiae; Aliter enim explicari, quod quaeritur, non potest. Sed tempus est, si videtur, et recta quidem ad me. </p>' + "\n" +
            '            <p>Proclivi currit oratio. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Est enim effectrix multarum et magnarum voluptatum. Sed quae tandem ista ratio est? De illis, cum volemus. Claudii libidini, qui tum erat summo ne imperio, dederetur. Illa argumenta propria videamus, cur omnia sint paria peccata. </p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        popout: (
            '<div class="panel-group">' + "\n" +
            '    <div class="panel panel-arrow panel-popout">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            Trip to Caribean cruise' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si quae forte-possumus. Explanetur igitur. At ego quem huic anteponam non audeo dicere; Quia dolori non voluptas contraria est, sed doloris privatio. Urgent tamen et nihil remittunt. Huius, Lyco, oratione locuples, rebus ipsis ielunior. Duo Reges: constructio interrete. </p>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="panel-footer">' + "\n" +
            '            <button class="btn btn-flat text-blue-6 bg-blue-0-h">' + "\n" +
            '                Done' + "\n" +
            '            </button>' + "\n" +
            '            <button class="btn btn-flat text-blue-6 bg-blue-0-h">' + "\n" +
            '                Cancel' + "\n" +
            '            </button>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="panel panel-arrow panel-popout">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            Barbados' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Ita graviter et severe voluptatem secrevit a bono. Ut in geometria, prima si dederis, danda sunt omnia. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Et nemo nimium beatus est; Ne discipulum abducam, times. At, si voluptas esset bonum, desideraret. Hoc est non dividere, sed frangere. Satisne ergo pudori consulat, si quis sine teste libidini pareat? Beatus autem esse in maximarum rerum timore nemo potest. Nihil enim iam habes, quod ad corpus referas; </p>' + "\n" +
            '            <p>Atqui reperies, inquit, in hoc quidem pertinacem; Duo enim genera quae erant, fecit tria. Sed haec nihil sane ad rem; Eadem nunc mea adversum te oratio est. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Id Sextilius factum negabat. Sic enim censent, oportunitatis esse beate vivere. Qui ita affectus, beatum esse numquam probabis; Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. </p>' + "\n" +
            '            <p>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Si enim ita est, vide ne facinus facias, cum mori suadeas. Aliena dixit in physicis nec ea ipsa, quae tibi probarentur; Tum Quintus: Est plane, Piso, ut dicis, inquit. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. </p>' + "\n" +
            '            <p>Iam enim adesse poterit. Dicimus aliquem hilare vivere; At certe gravius. Quod iam a me expectare noli. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Erat enim Polemonis. Nondum autem explanatum satis, erat, quid maxime natura vellet. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; </p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="panel panel-arrow panel-popout">' + "\n" +
            '        <a class="panel-header" data-toggle="panel">' + "\n" +
            '            The best cruise line' + "\n" +
            '        </a>' + "\n" +
            '        <div class="panel-body">' + "\n" +
            '            <p>Ut aliquid scire se gaudeant? Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Quae similitudo in genere etiam humano apparet. Quod cum dixissent, ille contra. Idemne potest esse dies saepius, qui semel fuit? Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Nemo nostrum istius generis asotos iucunde putat vivere. </p>' + "\n" +
            '            <p>Immo alio genere; Inde sermone vario sex illa a Dipylo stadia confecimus. Ergo id est convenienter naturae vivere, a natura discedere. Idemne, quod iucunde? Sed quot homines, tot sententiae; Si qua in iis corrigere voluit, deteriora fecit. Ea possunt paria non esse. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Sed quot homines, tot sententiae; Aliter enim explicari, quod quaeritur, non potest. Sed tempus est, si videtur, et recta quidem ad me. </p>' + "\n" +
            '            <p>Proclivi currit oratio. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Est enim effectrix multarum et magnarum voluptatum. Sed quae tandem ista ratio est? De illis, cum volemus. Claudii libidini, qui tum erat summo ne imperio, dederetur. Illa argumenta propria videamus, cur omnia sint paria peccata. </p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    };
});