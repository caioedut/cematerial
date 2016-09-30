<?php load_header('Chips') ?>

<div class="layout-content">

    <section class="container-lg">
        <h2>Basic</h2>
        <p>
            Chips represent complex entities in small blocks, such as a contact.
        </p>

        <?php
        $code = '
<div class="chips">
    Basic chips
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
        <h2>Advanced</h2>
        <p>
            You can add an image or an icon
        </p>

        <?php
        $code = '
<div class="chips">
    <img src="img/cards.jpg" alt=""/>
    Image chips
</div>
<div class="chips">
    <img src="img/cards2.jpg" alt=""/>
    Icon chips
    <i class="md-icon">close</i>
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