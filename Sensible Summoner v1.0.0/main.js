const Main = new NativeClass("Terraria", "Main");
const Player = new NativeClass("Terraria", "Player");

let duration = 0;

Player.UpdateBuffs.hook((orig, self, owner) => {
    if (duration > 0 && owner === Main.myPlayer) {
        duration -= 1;
        self.endurance += 0.15;
    }

    orig(self, owner);
});

const Projectile = new NativeClass("Terraria", "Projectile");
const ProjectileID = new NativeClass("Terraria.ID", "ProjectileID");

let activeProjectile = null;

Projectile.Damage_PVE.hook((orig, self, rect, mult) => {
    activeProjectile = self;
    orig(self, self.getRect(), mult);
    activeProjectile = null;
});

const NPC = new NativeClass("Terraria", "NPC");

NPC.StrikeNPC.hook((orig, self, dmg, kb, dir, crit, noEffect, fromNet, owner) => {
    if (activeProjectile) {
        let isWhip = ProjectileID.Sets.IsAWhip[activeProjectile.type];
        if (isWhip) {
            duration = 180;
        }

        if (isWhip || activeProjectile.minion || activeProjectile.sentry) {
            let player = Main.player[owner];
            crit = Math.random() * 100 < player.meleeCrit + (isWhip ? player.HeldItem.crit : 0);
        }
    }

    return orig(self, dmg, kb, dir, crit, noEffect, fromNet, owner);
});