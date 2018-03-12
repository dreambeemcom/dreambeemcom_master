'use strict';

angular.module('dreambeemcomApp')
    .config(function ($mdThemingProvider, $mdIconProvider, $sceProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('grey');

        $sceProvider.enabled(false);

        $mdIconProvider
            .icon('time24', 'bower_components/material-design-icons/action/svg/production/ic_history_24px.svg', 24)
            .icon('status24', 'bower_components/material-design-icons/action/svg/production/ic_cached_24px.svg', 24)
            .icon('explore24', 'bower_components/material-design-icons/action/svg/production/ic_explore_24px.svg', 24)
            .icon('shoppingbasket24', 'bower_components/material-design-icons/action/svg/production/ic_shopping_basket_24px.svg', 24)
            .icon('shoppingcart24', 'bower_components/material-design-icons/action/svg/production/ic_shopping_cart_24px.svg', 24)
            .icon('camera24', 'bower_components/material-design-icons/image/svg/production/ic_camera_alt_24px.svg', 24)
            .icon('furnybeem24', 'bower_components/material-design-icons/social/svg/production/ic_share_24px.svg', 24)
            .icon('dreambeem24', 'bower_components/material-design-icons/social/svg/production/ic_whatshot_24px.svg', 24)
            .icon('productbeem24', 'bower_components/material-design-icons/communication/svg/production/ic_business_24px.svg', 24)
            .icon('performance24', 'bower_components/material-design-icons/content/svg/production/ic_gesture_24px.svg', 24)
            .icon('amount24', 'bower_components/material-design-icons/action/svg/production/ic_euro_symbol_24px.svg', 24)
            .icon('callsplit24', 'bower_components/material-design-icons/communication/svg/production/ic_call_split_24px.svg', 24)
            .icon('category24', 'bower_components/material-design-icons/action/svg/production/ic_book_24px.svg', 24)
            .icon('description24', 'bower_components/material-design-icons/action/svg/production/ic_assignment_24px.svg', 24)
            .icon('keywords24', 'bower_components/material-design-icons/action/svg/production/ic_code_24px.svg', 24)
            .icon('deliverytime24', 'bower_components/material-design-icons/action/svg/production/ic_find_replace_24px.svg', 24)
            .icon('action24', 'bower_components/material-design-icons/image/svg/production/ic_flare_24px.svg', 24)
            .icon('delete24', 'bower_components/material-design-icons/action/svg/production/ic_delete_24px.svg', 24)
            .icon('fame24', 'bower_components/material-design-icons/content/svg/production/ic_report_24px.svg', 24)

            .icon('street24', 'bower_components/material-design-icons/action/svg/production/ic_label_24px.svg', 24)
            .icon('plz24', 'bower_components/material-design-icons/action/svg/production/ic_perm_media_24px.svg', 24)
            .icon('town24', 'bower_components/material-design-icons/action/svg/production/ic_receipt_24px.svg', 24)
            .icon('country24', 'bower_components/material-design-icons/action/svg/production/ic_room_24px.svg', 24)

            .icon('menu24', 'bower_components/material-design-icons/image/svg/production/ic_dehaze_48px.svg', 24)

            .icon('beemline24', 'bower_components/material-design-icons/alert/svg/production/ic_error_outline_24px.svg', 24)

            .icon('tooltip24', 'bower_components/material-design-icons/action/svg/production/ic_help_outline_24px.svg', 24)

            .icon('dreamproducts24', 'bower_components/material-design-icons/action/svg/production/ic_copyright_24px.svg', 24)
            .icon('dreamevents24', 'bower_components/material-design-icons/action/svg/production/ic_find_replace_24px.svg', 24)
            .icon('dreampapers24', 'bower_components/material-design-icons/action/svg/production/ic_class_24px.svg', 24)

            .icon('beemline24', 'bower_components/material-design-icons/alert/svg/production/ic_error_outline_24px.svg', 24)

            .icon('alertOk24', 'bower_components/material-design-icons/action/svg/production/ic_check_circle_24px.svg', 24)
            .icon('alertFalse24', 'bower_components/material-design-icons/action/svg/production/ic_highlight_off_24px.svg', 24)
            .icon('furnybeemAmount24', 'bower_components/material-design-icons/action/svg/production/ic_done_all_24px.svg', 24)

            .icon('allReach24', 'bower_components/material-design-icons/social/svg/production/ic_people_outline_24px.svg', 24)

            .icon('logout24', 'bower_components/material-design-icons/action/svg/production/ic_compare_arrows_24px.svg', 24)

            .icon('receiver24', 'bower_components/material-design-icons/action/svg/production/ic_assignment_ind_24px.svg', 24)
            .icon('subject24', 'bower_components/material-design-icons/communication/svg/production/ic_import_contacts_24px.svg', 24)
            .icon('info24', 'bower_components/material-design-icons/action/svg/production/ic_perm_scan_wifi_24px.svg', 24)
            .icon('setting24', 'bower_components/material-design-icons/action/svg/production/ic_settings_24px.svg', 24)
            .icon('assessment24', 'bower_components/material-design-icons/communication/svg/production/ic_comment_24px.svg', 24)
            .icon('type24', 'bower_components/material-design-icons/image/svg/production/ic_filter_center_focus_24px.svg', 24)
            .icon('name24', 'bower_components/material-design-icons/action/svg/production/ic_perm_identity_24px.svg', 24);

    });
