<?php load_header('Cards') ?>

<div class="layout-content">

    <section class="container-lg">
        <h2>Basic</h2>
        <p>
            Cards are set by <code>.card</code> class. You can use the classes <code>.card-header</code>, <code>.card-body</code> and <code>.card-footer</code> to create the respective containers. Also can use <code>.card-title</code> to add an title without margins to card.
        </p>

        <?php
        $code = '
<div class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->
    <div class="card">
        <img class="img-fluid" src="img/cards.jpg" alt=""/>
        <div class="card-header">
            <h2 class="card-title">Kangaroo Valey Saffari</h2>
        </div>
        <div class="card-body">
            Located two hours south of Sydney in the Southern Highlands of New South Waves, ...
        </div>
        <div class="card-footer">
            <button class="btn text-blue-5" type="button">
                Share
            </button>
            <button class="btn text-blue-5" type="button">
                Explore
            </button>
        </div>
    </div>
</div>
';
        ?>

        <div class="card">
            <div class="card-header">
                <?= $code ?>
            </div>
            <?= code($code) ?>
        </div>
    </section>

    <section class="container-lg">
        <h2>Grid and Cards</h2>
        <p>
            You can simple fill the <code>.card</code> to a <code>.grid</code> container, and make a list of cards with the same size. You need to add <code>.grid-cards</code> to a <code>.grid</code> parent.
        </p>

        <?php
        $code = '
<div class="grid grid-gutter grid-cards"> <!-- Grid container -->
    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->
        <div class="card">
            <img class="img-fluid" src="img/cards.jpg" alt=""/>
            <div class="card-header">
                <h2 class="card-title">Kangaroo Valey Saffari</h2>
            </div>
            <div class="card-body">
                Located two hours south of Sydney in the Southern Highlands of New South Waves
            </div>
            <div class="card-footer">
                <button class="btn text-blue-5" type="button">
                    Share
                </button>
                <button class="btn text-blue-5" type="button">
                    Explore
                </button>
            </div>
        </div>
    </div>
    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->
        <div class="card">
            <img class="img-fluid" src="img/cards2.jpg" alt=""/>
            <div class="card-header">
                <h2 class="card-title">New York City</h2>
            </div>
            <div class="card-body">
                Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world
            </div>
            <div class="card-footer">
                <button class="btn text-blue-5" type="button">
                    Share
                </button>
                <button class="btn text-blue-5" type="button">
                    Explore
                </button>
            </div>
        </div>
    </div>
    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->
        <div class="card">
            <img class="img-fluid" src="img/cards3.jpg" alt=""/>
            <div class="card-header">
                <h2 class="card-title">Fun at the Beach</h2>
            </div>
            <div class="card-body">
                There are some signs of a calm at noon, and these became more distinct as the sun
            </div>
            <div class="card-footer">
                <button class="btn text-blue-5" type="button">
                    Share
                </button>
                <button class="btn text-blue-5" type="button">
                    Explore
                </button>
            </div>
        </div>
    </div>
</div>
';
        ?>

        <div class="card">
            <div class="card-header">
                <?= $code ?>
            </div>
            <?= code($code) ?>
        </div>
    </section>

    <section class="container-lg">
        <h2>Colors</h2>
        <p>
            Feel free to use the classes <code>bg-*-*</code> for background color and <code>text-*-*</code> for text color, defined on <a class="link-underline text-blue-5" href="layout/color-pallete">Collor Pallet</a>.
        </p>

        <?php
        $code = '
<div class="grid grid-cards"> <!-- Grid container -->
    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 container-md"> <!-- Container size -->
        <div class="card bg-red-6">
            <img class="img-fluid" src="img/cards.jpg" alt=""/>
            <div class="card-header bg-red-8">
                <h2 class="card-title">Kangaroo Valey Saffari</h2>
            </div>
            <div class="card-body container-md">
                Located two hours south of Sydney in the Southern Highlands of New South Waves
            </div>
            <div class="card-footer">
                <button class="btn text-white" type="button">
                    Share
                </button>
                <button class="btn text-white" type="button">
                    Explore
                </button>
            </div>
        </div>
    </div>
    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 container-md"> <!-- Container size -->
        <div class="card bg-green-6">
            <img class="img-fluid" src="img/cards2.jpg" alt=""/>
            <div class="card-header">
                <h2 class="card-title">New York City</h2>
            </div>
            <div class="divider-horizontal border-green-8"></div>
            <div class="card-body container-md">
                Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world
            </div>
            <div class="card-footer bg-white text-green-6">
                <button class="btn text-green-5" type="button">
                    Share
                </button>
                <button class="btn text-green-5" type="button">
                    Explore
                </button>
            </div>
        </div>
    </div>
    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 container-md"> <!-- Container size -->
        <div class="card bg-blue-7">
            <img class="img-fluid" src="img/cards3.jpg" alt=""/>
            <div class="card-header bg-blue-6">
                <h2 class="card-title">Fun at the Beach</h2>
            </div>
            <div class="card-body container-md">
                There are some signs of a calm at noon, and these became more distinct as the sun
            </div>
            <div class="card-footer bg-blue-6">
                <button class="btn text-white" type="button">
                    Share
                </button>
                <button class="btn text-white" type="button">
                    Explore
                </button>
            </div>
        </div>
    </div>
</div>
';
        ?>

        <div class="card">
            <div class="card-header">
                <?= $code ?>
            </div>
            <?= code($code) ?>
        </div>
    </section>

</div>