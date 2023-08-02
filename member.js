function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsmemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member:'='
        }
    };
}