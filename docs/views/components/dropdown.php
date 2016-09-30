<?php load_header('Dropdown') ?>

<div class="layout-content">

    <section class="container-lg">
        <h2>Basic</h2>
        <p>
            You can use dropdown to anything, not necessarily to a menu.
        </p>

        <?php
        $code = '
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop me
    </a>
    <div class="dropdown-body">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
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
        <h2>Sizes</h2>
        <p>
            You can set max-width for a dropdown, using <code>.dropdown-xs</code>, <code>.dropdown-sm</code>, <code>.dropdown-lg</code> or <code>.dropdown-xl</code> classes in the <code>.dropdown-body</code>
        </p>

        <?php
        $code = '
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop me
    </a>
    <div class="dropdown-body dropdown-xs">
        <div class="container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div>
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop me
    </a>
    <div class="dropdown-body dropdown-sm">
        <div class="container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div>
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop me
    </a>
    <div class="dropdown-body dropdown-lg">
        <div class="container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div>
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop me
    </a>
    <div class="dropdown-body dropdown-xl">
        <div class="container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
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
        <h2>Position</h2>
        <p>
            You can define the dropdown fade position, and combine <code>top/bottom</code> with <code>left/right</code> classes.
        </p>

        <h2>Facing in</h2>
        <p>
            These classes makes dropdown appears facing in to the toggler:
        </p>
        <ul>
            <li>
                <code>.top</code> - Dropdown grows down (<code>top: 0;</code>)
            </li>
            <li>
                <code>.bottom</code> - Dropdown grows up (<code>bottom: 0;</code>)
            </li>
            <li>
                <code>.left</code> - Dropdown grows right (<code>left: 0;</code>)
            </li>
            <li>
                <code>.right</code> - Dropdown grows left (<code>right: 0;</code>)
            </li>
        </ul>

        <?php
        $code = '
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .top
    </a>
    <div class="dropdown-body dropdown-sm top">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div>
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .bottom
    </a>
    <div class="dropdown-body dropdown-sm bottom">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div> 
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .left
    </a>
    <div class="dropdown-body dropdown-sm left">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div> 
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .right
    </a>
    <div class="dropdown-body dropdown-sm right">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
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

        <h2>Facing out</h2>
        <p>
            These classes makes dropdown appears facing out the toggler:
        </p>
        <ul>
            <li>
                <code>.top-reverse</code> - Dropdown grows down (<code>top: 100%;</code>)
            </li>
            <li>
                <code>.bottom-reverse</code> - Dropdown grows up (<code>bottom: 100%;</code>)
            </li>
            <li>
                <code>.left-reverse</code> - Dropdown grows right (<code>left: 100%;</code>)
            </li>
            <li>
                <code>.right-reverse</code> - Dropdown grows left (<code>right: 100%;</code>)
            </li>
        </ul>

        <?php
        $code = '
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .top-inverse
    </a>
    <div class="dropdown-body dropdown-sm top-inverse">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div>
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .bottom-inverse
    </a>
    <div class="dropdown-body dropdown-sm bottom-inverse">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div> 
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .left-inverse
    </a>
    <div class="dropdown-body dropdown-sm left-inverse">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
        </div>
    </div>
</div> 
<div class="dropdown"> <!-- Init dropdown -->
    <a class="btn bg-blue-6" data-toggle="dropdown">
        Drop .right-inverse
    </a>
    <div class="dropdown-body dropdown-sm right-inverse">
        <div class="container-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.
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
        <h2>Dropdown Menu</h2>
        <p>
            See <a class="text-blue-6 link-underline" href="components/menus">Menus</a>.
        </p>
    </section>

</div>