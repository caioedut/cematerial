<?php load_header('Collor Pallete') ?>

<div class="layout-content">

    <section class="container-lg">
        <h2>Colors</h2>
        <p>
            You can combine the colors with some classes, to change ANYTHING:
        </p>
        <ul>
            <li>
                <code>.bg-*</code> to change background color.
            </li>
            <li>
                <code>.text-*</code> to change text color.
            </li>
            <li>
                <code>.input-*</code> to change the base color of text field.
            </li>
            <li>
                <code>.focus-*</code> to change the base color of text field WHEN focused.
            </li>
        </ul>

        <?php
        $colors = array('red', 'pink', 'purple', 'deeppurple', 'indigo', 'blue', 'lightblue', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'brown', 'grey', 'bluegrey');
        ?>

        <div class="grid grid-gutter">
            <?php foreach ($colors as $color) { ?>
                <div class="grid-col xs-col-6 sm-col-4">
                    <div class="container-md <?= 'bg-' . $color . '-5' ?>">
                        <b><?= strtoupper($color) ?></b>
                    </div>
                    <?php foreach (range(0, 9) as $i) { ?>
                        <div class="container-md <?= 'bg-' . $color . '-' . $i ?>">
                            <b><?= '*-' . $color . '-' . $i ?></b>
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>
            <div class="grid-col xs-col-6 sm-col-4">
                <div class="container-md bg-black">
                    <b>*-black</b>
                </div>
                <div class="container-md bg-white">
                    <b>*-white</b>
                </div>
            </div>
        </div>
    </section>

    <section class="container-lg">
        <h2>Data api Events</h2>
        <p>
            You can use the data-api to add a class when an event is triggered.
        </p>

        <ul>
            <li>
                <code>[data-class-hover="bg-red-6"]</code> - Add class <code>.bg-red-6</code> when mouse is over element.
            </li>
            <li>
                <code>[data-class-focus="bg-red-6"]</code> - Add class <code>.bg-red-6</code> when element has focus.
            </li>
        </ul>

        <?php
        $code = '
<button class="btn" type="button" data-class-hover="bg-red-6">
    Hover me
</button>
<button class="btn" type="button" data-class-focus="bg-red-6">
    Focus me
</button>
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