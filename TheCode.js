let getMembershipsOfUser = await OrganisationMembershipService.getMembershipsOfUser(userId);
      Promise.all(getMembershipsOfUser.map(mem => {
        let isChief = OrganisationMembershipService.isChief(userId);
        if (isChief) {
          throw new Error("You can't delete your profile until you have a role 'CHIEF' ");
        }
      }))