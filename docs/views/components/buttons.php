<?php load_header('Buttons') ?>

<div class="layout-content">

    <section class="container-lg">
        <h2>Basic</h2>
        <p>
            Buttons are defined by the class <code>.btn</code>. Capitalization is automatically applied and, if you do not want this, just use the class <code>.btn-lower</code>.
        </p>

        <?php
        $code = '
<button class="btn" type="button">
    Button
</button>
<button class="btn btn-lower" type="button">
    Button Lower
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

    <section class="container-lg">
        <h2>Colors</h2>
        <p>
            Feel free to use the classes <code>bg-*-*</code> for background color and <code>text-*-*</code> for text color, defined on <a class="link-underline text-blue-5" href="layout/color-pallete">Collor Pallet</a>.
        </p>

        <?php
        $code = '
<button class="btn bg-grey-2" type="button">
    Grey
</button>
<button class="btn bg-red-6" type="button">
    Red
</button>
<button class="btn bg-green-6" type="button">
    Green
</button>
<button class="btn bg-blue-6" type="button">
    Blue
</button>
<button class="btn text-red-6" type="button">
    Red
</button>
<button class="btn text-green-6" type="button">
    Green
</button>
<button class="btn text-blue-6" type="button">
    Blue
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

    <section class="container-lg">
        <h2>Icons and circle</h2>
        <p>
            You can use the class <code>.btn-icon</code> if the button is only an icon and the class <code>.btn-cicle</code> to round the corners perfeclty.
        </p>

        <?php
        $code = '
<button class="btn bg-grey-2 btn-icon" type="button">
    <i class="md-icon">add</i>
</button>
<button class="btn bg-red-6 btn-icon" type="button">
    <i class="md-icon">remove</i>
</button>
<button class="btn bg-green-6 btn-icon btn-circle" type="button">
    <i class="md-icon">play_arrow</i>
</button>
<button class="btn bg-blue-6 btn-icon btn-circle" type="button">
    <i class="md-icon">stop</i>
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

    <section class="container-lg">
        <h2>Elevation</h2>
        <p>
            It is to display a shadow behind the button.
        </p>

        <?php
        $code = '
<button class="btn bg-blue-6 btn-raised raised-xs" type="button">
    Button
</button>
<button class="btn bg-blue-6 btn-raised raised-sm" type="button">
    Button
</button>
<button class="btn bg-blue-6 btn-raised raised-md" type="button">
    Button
</button>
<button class="btn bg-blue-6 btn-raised raised-lg" type="button">
    Button
</button>
<button class="btn bg-blue-6 btn-raised raised-xl" type="button">
    Button
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

    <section class="container-lg">
        <h2>Sizes</h2>
        <p>
            You can use the classes <code>.btn-xs</code>, <code>.btn-sm</code>, <code>.btn-lg</code> and <code>.btn-xl</code>.
        </p>

        <?php
        $code = '
<button class="btn bg-blue-6 btn-xs" type="button">
    Button xs
</button>
<button class="btn bg-blue-6 btn-sm" type="button">
    Button sm
</button>
<button class="btn bg-blue-6" type="button">
    Button
</button>
<button class="btn bg-blue-6 btn-lg" type="button">
    Button lg
</button>
<button class="btn bg-blue-6 btn-xl" type="button">
    Button xl
</button>
<br/>
<button class="btn btn-icon btn-circle bg-blue-6 btn-xs" type="button">
    <i class="md-icon">message</i>
</button>
<button class="btn btn-icon btn-circle bg-blue-6 btn-sm" type="button">
    <i class="md-icon">message</i>
</button>
<button class="btn btn-icon btn-circle bg-blue-6" type="button">
    <i class="md-icon">message</i>
</button>
<button class="btn btn-icon btn-circle bg-blue-6 btn-lg" type="button">
    <i class="md-icon">message</i>
</button>
<button class="btn btn-icon btn-circle bg-blue-6 btn-xl" type="button">
    <i class="md-icon">message</i>
</button>
';
        ?>

        <div class="card">
            <div class="card-header">
                <?= $code ?>
            </div>
            <?= code($code) ?>
        </div>

        <p>
            Set the button full width using <code>.btn-block</code>
        </p>

        <?php
        $code = '
<button class="btn bg-blue-6 btn-block" type="button">
    Button block
</button>
<button class="btn bg-blue-6 btn-xl btn-block" type="button">
    Button lg block
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
