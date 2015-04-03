angular.module('manage.templates', ['manageHours/manageEx.tpl.html', 'manageHours/manageLoc.tpl.html', 'manageHours/manageSem.tpl.html', 'manageHours/manageUsers.tpl.html', 'manageOneSearch/manageOneSearch.tpl.html', 'manageUserGroups/manageUG.tpl.html', 'siteFeedback/siteFeedback.tpl.html']);

angular.module("manageHours/manageEx.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manageHours/manageEx.tpl.html",
    "<div class=\"text-right\">\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"deleteOldExc()\" ng-disabled=\"loading\">Delete All Outdated Exceptions</button>\n" +
    "    <br>{{resultDel}}\n" +
    "</div>\n" +
    "<table class=\"table table-hover table-condensed\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>Exception Description</th>\n" +
    "        <th class=\"text-center\">Date</th>\n" +
    "        <th class=\"text-center\">Days</th>\n" +
    "        <th class=\"text-center\">Hours</th>\n" +
    "        <th class=\"text-center\">Action</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tr ng-repeat=\"exception in allowedLibraries.exc[selLib].ex track by exception.id\" ng-click=\"expandExc(exception)\">\n" +
    "        <td>\n" +
    "            <div ng-hide=\"isExpExc(exception.id)\">{{exception.desc}}</div>\n" +
    "            <div ng-show=\"isExpExc(exception.id)\"><input type=\"text\" class=\"form-control\" size=\"30\" ng-model=\"exception.desc\" ng-required /></div>\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <div ng-hide=\"isExpExc(exception.id)\">{{exception.datems | date : 'MMM d, y'}}</div>\n" +
    "            <div ng-show=\"isExpExc(exception.id)\">\n" +
    "\n" +
    "                <input type=\"text\" class=\"form-control\" size=\"8\" datepicker-popup=\"{{format}}\" ng-click=\"toggleDP1($event)\" show-button-bar=\"false\"\n" +
    "                       ng-model=\"exception.datems\" is-open=\"openedDP1\" datepicker-options=\"dateOptions\"\n" +
    "                       close-on-date-selection=\"false\" ng-required=\"true\" />\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <div ng-hide=\"isExpExc(exception.id)\">{{exception.days}}</div>\n" +
    "            <div ng-show=\"isExpExc(exception.id)\"><input type=\"text\" class=\"form-control\" size=\"2\" ng-model=\"exception.days\" ng-required /></div>\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <select class=\"form-control\" ng-model=\"exception.from\">\n" +
    "                        <option ng-repeat=\"hours in hrsFrom\" ng-selected=\"{{exception.from == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <select class=\"form-control\" ng-model=\"exception.to\">\n" +
    "                        <option ng-repeat=\"hours in hrsTo\" ng-selected=\"{{exception.to == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td class=\"text-right\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"updateExc(exception)\" ng-show=\"isExpExc(exception.id)\" ng-disabled=\"loading\">Save</button>\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"deleteExc(exception, $index)\" ng-show=\"isExpExc(exception.id)\" ng-disabled=\"loading\">Delete</button>\n" +
    "            <div ng-show=\"isExpExc(exception.id)\"><br>{{result}}</div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>\n" +
    "            <input type=\"text\" class=\"form-control\" size=\"30\" ng-model=\"newException.desc\" placeholder=\"Exception Description\" ng-required />\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" size=\"8\" datepicker-popup=\"{{format}}\" ng-click=\"toggleDP2($event)\" show-button-bar=\"false\"\n" +
    "                   ng-model=\"newException.datems\" is-open=\"openedDP2\" datepicker-options=\"dateOptions\"\n" +
    "                   close-on-date-selection=\"false\" ng-required=\"true\" placeholder=\"MM/DD/YYYY\" />\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <input type=\"text\" class=\"form-control\" size=\"2\" ng-model=\"newException.days\" placeholder=\"Days\" ng-required />\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <select class=\"form-control\" ng-model=\"newException.from\">\n" +
    "                <option ng-repeat=\"hours in hrsFrom\" ng-selected=\"{{newException.from == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "            </select>\n" +
    "            <select class=\"form-control\" ng-model=\"newException.to\">\n" +
    "                <option ng-repeat=\"hours in hrsTo\" ng-selected=\"{{newException.to == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "            </select>\n" +
    "        </td>\n" +
    "        <td class=\"text-right\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"createExc()\" ng-disabled=\"loading\">Create Exception</button>\n" +
    "            <br>{{result}}\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "");
}]);

angular.module("manageHours/manageLoc.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manageHours/manageLoc.tpl.html",
    "<table class=\"table table-hover table-condensed\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>Library Name</th>\n" +
    "        <th class=\"text-center\">ID</th>\n" +
    "        <th class=\"text-center\">Parent ID</th>\n" +
    "        <th class=\"text-center\">Action</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tr ng-repeat=\"lib in dataUL.locations\" ng-click=\"expandLoc(lib)\">\n" +
    "        <td>\n" +
    "            {{lib.name}}\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            {{lib.lid}}\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            {{lib.parent}}\n" +
    "        </td>\n" +
    "        <td class=\"text-right\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"updateExc(exception)\" ng-show=\"isExpExc(exception.id)\" ng-disabled=\"isLoading\">Save</button>\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"deleteExc(exception, $index)\" ng-show=\"isExpExc(exception.id)\" ng-disabled=\"isLoading\">Delete</button>\n" +
    "            <div ng-show=\"isExpExc(exception.id)\"><br>{{result}}</div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>\n" +
    "            <input type=\"text\" class=\"form-control\" size=\"30\" ng-model=\"newLocation\" placeholder=\"Library Name\" ng-required />\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <select class=\"form-control\" ng-model=\"newParent\" ng-options=\"lib.name for lib in dataUL.locations\">\n" +
    "                <option value=\"\" selected>Select parent library</option>\n" +
    "            </select>\n" +
    "        </td>\n" +
    "        <td class=\"text-right\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"createLoc(newLocation, newParent)\" ng-disabled=\"isLoading\">Create Location</button>\n" +
    "            <br>{{result2}}\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "");
}]);

angular.module("manageHours/manageSem.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manageHours/manageSem.tpl.html",
    "<table class=\"table table-hover table-condensed\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>Semester</th>\n" +
    "        <th class=\"text-center\">Sun</th>\n" +
    "        <th class=\"text-center\">Mon</th>\n" +
    "        <th class=\"text-center\">Tue</th>\n" +
    "        <th class=\"text-center\">Wed</th>\n" +
    "        <th class=\"text-center\">Thu</th>\n" +
    "        <th class=\"text-center\">Fri</th>\n" +
    "        <th class=\"text-center\">Sat</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tr ng-repeat=\"sem in allowedLibraries.sem[selLib].sem\" ng-click=\"expandSem(sem)\">\n" +
    "        <th scope=\"row\" ng-hide=\"isExpSem(sem.dsid)\">{{sem.name}}<br>\n" +
    "            {{sem.startdate}}<br>{{sem.enddate}}\n" +
    "        </th>\n" +
    "        <th scope=\"row\" ng-show=\"isExpSem(sem.dsid)\">{{sem.name}}<br>\n" +
    "            <div class=\"input-group\">\n" +
    "                <input type=\"text\" class=\"form-control dp\" size=\"8\" ng-minlength=\"8\" ng-maxlength=\"10\" ng-model=\"sem.startdate\" ng-required />\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveChanges(sem)\" ng-disabled=\"loading\">Save</button>\n" +
    "                {{result}}\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"deleteSem(sem)\" ng-disabled=\"loading\">Delete {{sem.name}}</button>\n" +
    "            </div>\n" +
    "        </th>\n" +
    "        <td class=\"text-center\" style=\"width:11%\" ng-repeat=\"day in sem.dow\">\n" +
    "            <div ng-hide=\"isExpSem(sem.dsid)\">\n" +
    "                {{day.hours}}\n" +
    "            </div>\n" +
    "            <div ng-show=\"isExpSem(sem.dsid)\">\n" +
    "                <select class=\"form-control\" ng-model=\"day.from\">\n" +
    "                    <option ng-repeat=\"hours in hrsFrom\" ng-selected=\"{{day.from == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "                </select>\n" +
    "                <select class=\"form-control\" ng-model=\"day.to\">\n" +
    "                    <option ng-repeat=\"hours in hrsTo\" ng-selected=\"{{day.to == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "<table class=\"table table-hover table-condensed\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>Semester</th>\n" +
    "        <th class=\"text-center\">Sun</th>\n" +
    "        <th class=\"text-center\">Mon</th>\n" +
    "        <th class=\"text-center\">Tue</th>\n" +
    "        <th class=\"text-center\">Wed</th>\n" +
    "        <th class=\"text-center\">Thu</th>\n" +
    "        <th class=\"text-center\">Fri</th>\n" +
    "        <th class=\"text-center\">Sat</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "        <th scope=\"row\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input type=\"text\" class=\"form-control\" size=\"12\" ng-minlength=\"4\" ng-maxlength=\"32\" ng-model=\"newSemester.name\" placeholder=\"Semester Name\" ng-required /><br>\n" +
    "                <input type=\"text\" class=\"form-control dp\" size=\"8\" ng-minlength=\"8\" ng-maxlength=\"10\" ng-model=\"newSemester.startdate\" placeholder=\"mm/dd/yyyy\" ng-required />\n" +
    "            </div>\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"createSem()\" ng-disabled=\"loading\">Create New Semester</button>\n" +
    "            {{result}}\n" +
    "        </th>\n" +
    "        <td class=\"text-center\" style=\"width:11%\" ng-repeat=\"day in newSemester.dow\">\n" +
    "            <select class=\"form-control\" ng-model=\"day.from\">\n" +
    "                <option ng-repeat=\"hours in hrsFrom\" ng-selected=\"{{day.from == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "            </select>\n" +
    "            <select class=\"form-control\" ng-model=\"day.to\">\n" +
    "                <option ng-repeat=\"hours in hrsTo\" ng-selected=\"{{day.to == hours.value}}\" ng-value=\"{{hours.value}}\">{{hours.name}}</option>\n" +
    "            </select>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "");
}]);

angular.module("manageHours/manageUsers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manageHours/manageUsers.tpl.html",
    "<table class=\"table table-hover table-condensed\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>User Login</th>\n" +
    "        <th class=\"text-center\">Access to This Page</th>\n" +
    "        <th class=\"text-center\">Library Access</th>\n" +
    "        <th class=\"text-center\">Action</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tr ng-repeat=\"user in dataUL.users\" ng-click=\"expandUser(user)\">\n" +
    "        <th scope=\"row\">{{user.name}}\n" +
    "        </th>\n" +
    "        <td class=\"text-center\">\n" +
    "            <input type=\"checkbox\" ng-model=\"user.role\">\n" +
    "        </td>\n" +
    "        <td class=\"text-left\">\n" +
    "            <div class=\"row\" ng-repeat=\"lib in dataUL.locations\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"user.access[$index]\" ng-show=\"isExpUser(user.uid)\">\n" +
    "                </div>\n" +
    "                <div class=\"col-md-10\">\n" +
    "                    <div ng-show=\"isExpUser(user.uid) || user.access[$index]\">{{lib.name}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <div ng-show=\"isExpUser(user.uid)\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"updateUser(user)\" ng-disabled=\"isLoading\"\n" +
    "                        ng-hide=\"expUserIndex == 0\">Save</button>\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"deleteUser(user)\" ng-disabled=\"isLoading\"\n" +
    "                        ng-hide=\"expUserIndex == 0\">Delete</button><br>\n" +
    "                {{result}}\n" +
    "            </div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <th scope=\"row\">\n" +
    "            <select class=\"form-control\" ng-model=\"newUser\" ng-options=\"user.name for user in users\">\n" +
    "            </select>\n" +
    "        </th>\n" +
    "        <td class=\"text-center\">\n" +
    "            <input type=\"checkbox\" ng-model=\"newUserAdmin\">\n" +
    "        </td>\n" +
    "        <td class=\"text-left\">\n" +
    "            <div class=\"row\" ng-repeat=\"lib in dataUL.locations\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"newUserAccess[$index]\">\n" +
    "                </div>\n" +
    "                <div class=\"col-md-10\">\n" +
    "                    {{lib.name}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td class=\"text-center\">\n" +
    "            <div>\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"createUser(newUser)\" ng-disabled=\"isLoading\">Grant Access</button><br>\n" +
    "                {{result2}}\n" +
    "            </div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "");
}]);

angular.module("manageOneSearch/manageOneSearch.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manageOneSearch/manageOneSearch.tpl.html",
    "<h3>OneSearch Recommended Links</h3>\n" +
    "\n" +
    "<form class=\"form-inline\" ng-submit=\"addRecommendation()\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Keyword\" size=\"30\" maxlength=\"200\" ng-model=\"addRec.keyword\" required>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"http://www.example.com/\" size=\"30\" maxlength=\"1024\" ng-model=\"addRec.link\" required>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Link Title\" size=\"30\" maxlength=\"100\" ng-model=\"addRec.title\" required>\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\">Add Recommended Link</button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "<div ng-show=\"response.length > 0\">\n" +
    "    {{response}}\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"rec in recList.RecList\">\n" +
    "    <div>\n" +
    "        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"deleteRec(rec)\">Delete</button>\n" +
    "        <span>{{rec.keyword}} = <a href=\"{{rec.link}}\">{{rec.description}}</a></span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("manageUserGroups/manageUG.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manageUserGroups/manageUG.tpl.html",
    "<tabset justified=\"true\">\n" +
    "    <tab ng-repeat=\"tab in tabs\" heading=\"{{tab.name}}\" active=\"tab.active\">\n" +
    "        <div ng-show=\"tab.number == 0\">\n" +
    "            <table class=\"table table-hover table-condensed\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>User Login</th>\n" +
    "                    <th class=\"text-center\">Name</th>\n" +
    "                    <th class=\"text-center\">Access Rights to Web Applications</th>\n" +
    "                    <th class=\"text-center\">Action</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tr ng-repeat=\"user in users\" ng-click=\"expandUser(user)\">\n" +
    "                    <th scope=\"row\">\n" +
    "                        {{user.wpLogin}}\n" +
    "                    </th>\n" +
    "                    <td class=\"text-center\">\n" +
    "                        {{user.name}}\n" +
    "                    </td>\n" +
    "                    <td class=\"text-center\">\n" +
    "                        <div ng-show=\"isExpUser(user.id) && $index > 0\">\n" +
    "                            <div class=\"row\" ng-repeat=\"app in apps\">\n" +
    "                                <div class=\"col-xs-4 text-right\">\n" +
    "                                    <input type=\"checkbox\" ng-model=\"user.access[$index]\">\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-8\">\n" +
    "                                    <a href=\"{{app.link}}\">{{app.appName}}</a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-hide=\"isExpUser(user.id) && $index > 0\">\n" +
    "                            <div class=\"row\" ng-repeat=\"app in apps\">\n" +
    "                                <div class=\"col-xs-4 text-right\">\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-8\">\n" +
    "                                    <div ng-show=\"user.access[$index]\">\n" +
    "                                        <a href=\"{{app.link}}\">{{app.appName}}</a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-center\">\n" +
    "                        <div ng-show=\"isExpUser(user.id)\">\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"updateUser(user)\" ng-disabled=\"isLoading\"\n" +
    "                                    ng-show=\"$index > 0\">Save</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"deleteUser(user, $index)\" ng-disabled=\"isLoading\"\n" +
    "                                    ng-show=\"$index > 0\">Remove</button><br>\n" +
    "                            {{result}}\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <th scope=\"row\">\n" +
    "                        <select class=\"form-control\" ng-model=\"newUser\" ng-options=\"user.name for user in wpUsers\">\n" +
    "                        </select>\n" +
    "                    </th>\n" +
    "                    <td class=\"text-center\">\n" +
    "\n" +
    "                    </td>\n" +
    "                    <td class=\"text-center\">\n" +
    "                        <div class=\"row\" ng-repeat=\"app in apps\">\n" +
    "                            <div class=\"col-xs-4 text-right\">\n" +
    "                                <input type=\"checkbox\" ng-model=\"newUserAccess[$index]\">\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-8\">\n" +
    "                                <a href=\"{{app.link}}\">{{app.appName}}</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-center\">\n" +
    "                        <div>\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"createUser(newUser)\" ng-disabled=\"isLoading\">Grant Access Rights</button><br>\n" +
    "                            {{result2}}\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div ng-show=\"tab.number == 1\">\n" +
    "            <h4>Web applications with data manageable by users:</h4>\n" +
    "            <h4 class=\"text-center\" ng-repeat=\"app in apps\" ng-show=\"$index > 0\">\n" +
    "                <a href=\"{{app.link}}\">{{app.appName}}</a>\n" +
    "            </h4>\n" +
    "            <p>When we create new web application it has to be added to the database manually.</p>\n" +
    "        </div>\n" +
    "    </tab>\n" +
    "</tabset>\n" +
    "");
}]);

angular.module("siteFeedback/siteFeedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("siteFeedback/siteFeedback.tpl.html",
    "<h3>Received Feedback</h3>\n" +
    "<div class=\"row\" ng-repeat=\"record in responses\">\n" +
    "    <h4><a href=\"{{record.pageurl}}\">{{record.pageurl}}</a></h4>\n" +
    "    <div class=\"col-xs-1\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"delete(record)\"\n" +
    "                ng-show=\"false\">\n" +
    "            Delete\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-1\">\n" +
    "        Score: {{record.score}}\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-2\">\n" +
    "        {{record.when}}\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-2\">\n" +
    "        {{record.ip}}\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "        Comments: {{record.comments}}\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
