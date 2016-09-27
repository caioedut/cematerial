<?php load_header('Introduction') ?>

<div class="layout-content">

    <section id="dependences" class="container-lg">
        <h2>Dependences</h2>
        <p>
            <a class="text-blue-5 link-underline" href="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" target="_blank">
                jQuery
            </a>
            <br/>
            <a class="text-blue-5 link-underline" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" target="_blank">
                Roboto Font
            </a>
            <br/>
            <a class="text-blue-5 link-underline" href="https://fonts.googleapis.com/icon?family=Material+Icons" target="_blank">
                Material Icons Font
            </a>
        </p>
    </section>

    <section id="how-to-use" class="container-lg">
        <h2>How to use</h2>
        <p>
            Copy and paste the base code into your <code>&lt;head&gt;</code> before all imports.
        </p>

        <h3>Responsive meta tag</h3>
        <?php
        echo code('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0"/>');
        ?>

        <h3>Dependences</h3>
        <?php
        $code = '
<!-- JQUERY -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<!-- FONTS -->
<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                ';

        echo code($code);
        ?>

        <h3>Framework</h3>
        <?php
        $code = '
<!-- CEMATERIAL -->
<script type="text/javascript" src="js/cematerial.min.js"></script>
<link type="text/css" rel="stylesheet" href="css/cematerial.min.css"/>
            ';

        echo code($code);
        ?>
    </section>

    <div class="container-lg">
        <h2>GitHub</h2>

        <h3>Repository</h3>
        <a class="text-blue-5 link-underline" href="https://github.com/caioedut/CEMaterial/" target="_blank">
            https://github.com/caioedut/CEMaterial/
        </a>

        <h3>Demo page</h3>
        <a class="text-blue-5 link-underline" href="https://caioedut.github.io/CEMaterial/" target="_blank">
            https://caioedut.github.io/CEMaterial/
        </a>
    </div>

</div>