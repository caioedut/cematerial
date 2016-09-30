<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0"/>

    <title>CEMaterial by CaioEduT</title>

    <base href="<?= base_url() ?>"/>

    <!-- JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <!-- FONTS -->
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

    <!-- CEMATERIAL -->
    <script type="text/javascript" src="../js/cematerial.js"></script>
    <link type="text/css" rel="stylesheet" href="../css/cematerial.css"/>

    <!-- Code Highlight -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"></script>

    <script type="text/javascript">
        jQuery(function ($) {
            $('[data-language]').each(function (i, item) {
                hljs.highlightBlock(item);
            });
        });
    </script>

    <style type="text/css">
        code {
            background-color: #f0f0f0;
            border-radius: 3px;
            color: #880000;
            display: inline-block;
            padding: 2px 4px;
        }

        pre code {
            display: block;
            padding: 16px !important;
        }
    </style>
</head>

<body>

<div class="layout">
    <div class="layout-sidebar main-sidebar">

        <div class="panel-group">
            <div class="panel <?= !$router->folder || $router->folder == 'getting-started' ? 'panel-visible' : '' ?>">
                <a class="panel-header" data-toggle="panel">
                    <h4>Getting started</h4>
                </a>
                <div class="panel-body no-padding">
                    <div class="layout-nav">
                        <a class="indent <?= $router->view == 'introduction' ? 'bg-grey-2' : '' ?>" href="getting-started/introduction">
                            Introduction
                        </a>
                    </div>
                </div>
            </div>
            <div class="panel <?= $router->folder == 'layout' ? 'panel-visible' : '' ?>">
                <a class="panel-header" data-toggle="panel">
                    <h4>Layout</h4>
                </a>
                <div class="panel-body no-padding">
                    <div class="layout-nav">
                        <a class="indent <?= $router->view == 'overview' ? 'bg-grey-2' : '' ?>" href="layout/overview">
                            Overview
                        </a>
                        <a class="indent <?= $router->view == 'color-pallete' ? 'bg-grey-2' : '' ?>" href="layout/color-pallete">
                            Color Pallete
                        </a>
                    </div>
                </div>
            </div>
            <div class="panel <?= $router->folder == 'components' ? 'panel-visible' : '' ?>">
                <a class="panel-header" data-toggle="panel">
                    <h4>Components</h4>
                </a>
                <div class="panel-body no-padding">
                    <div class="layout-nav">
                        <a class="indent <?= $router->view == 'buttons' ? 'bg-grey-2' : '' ?>" href="components/buttons">
                            Buttons
                        </a>
                        <a class="indent <?= $router->view == 'cards' ? 'bg-grey-2' : '' ?>" href="components/cards">
                            Cards
                        </a>
                        <a class="indent <?= $router->view == 'chips' ? 'bg-grey-2' : '' ?>" href="components/chips">
                            Chips
                        </a>
                        <a class="indent <?= $router->view == 'dropdown' ? 'bg-grey-2' : '' ?>" href="components/dropdown">
                            Dropdown
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <?php include $path ?>
</div>

</body>
</html>