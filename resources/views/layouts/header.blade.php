<header id="page-header">
    <!-- Header Content -->
    <div class="content-header">
        <!-- Right Section -->
        <div class="content-header-section">
            <!-- Toggle Sidebar -->
            <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
            <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout"
                data-action="sidebar_toggle">
                <i class="fa fa-navicon"></i>
            </button>
            <!-- END Toggle Sidebar -->

        </div>
        <!-- END Right Section -->

        <!-- Left Section -->
        <div class="content-header-section">
            <!-- User Dropdown -->
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    توحید ناطقی<i class="fa fa-angle-down mr-5"></i>
                </button>
                
                <div class="dropdown-menu text-right min-width-150" aria-labelledby="page-header-user-dropdown">
                    <a class="dropdown-item" href="">
                        <i class="si si-user ml-5"></i> پروفایل
                    </a>
                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="">
                        <span><i class="si si-envelope-open ml-5"></i> دریافتی</span>
                        <span class="badge badge-primary">3</span>
                    </a>
                    <a class="dropdown-item" href="">
                        <i class="si si-note ml-5"></i> فاکتور ها
                    </a>
                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="">
                        <i class="si si-wrench ml-5"></i> تنظیمات
                    </a>

                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="">
                        <i class="si si-logout ml-5"></i> خروج
                    </a>
                </div>
            </div>
            <!-- END User Dropdown -->

        </div>
        <!-- END Left Section -->
    </div>
    <!-- END Header Content -->

</header>