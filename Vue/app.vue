<template>
	<!-- Navigation -->
    <nav id="nav" class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse">
                <ul class="nav" id="side-menu">
                    <li class="sidebar-search">
                    </li>
                    <li>
                        <a v-link="{ path: '/message' }"><i class="fa fa-envelope fa-fw"></i> A</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/approach' }"><i class="fa fa-random fa-fw"></i> B</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/strategy' }"><i class="fa fa-table fa-fw"></i> C</a>
                    </li>
                    <li>
                        <a v-link="{ path: '/messageType' }"><i class="fa fa-edit fa-fw"></i> D</a>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
	<router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
</template>