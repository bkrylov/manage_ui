angular.module('manage', [
    'ngAnimate',
    'ui.bootstrap',
    'manage.common',
    'manage.templates',
    'manage.manageHours',
    'manage.manageHoursUsers',
    'manage.manageUserGroups',
    'manage.siteFeedback',
    'manage.manageOneSearch',
    'manage.staffDirectory',
    'manage.manageDatabases',
    'manage.manageSoftware'
])

    .constant('HOURS_MANAGE_URL', '//wwwdev2.lib.ua.edu/libhours2/')
    .constant('USER_GROUPS_URL', '//wwwdev2.lib.ua.edu/userGroupsAdmin/')
    .constant('SITE_FEEDBACK_URL', '//wwwdev2.lib.ua.edu/siteSurvey/')
    .constant('ONE_SEARCH_URL', '//wwwdev2.lib.ua.edu/oneSearch/')
    .constant('STAFF_DIR_URL', '//wwwdev2.lib.ua.edu/staffDir/')
    .constant('DATABASES_URL', '//wwwdev2.lib.ua.edu/databases/')
    .constant('SOFTWARE_URL', '//wwwdev2.lib.ua.edu/softwareList/')
