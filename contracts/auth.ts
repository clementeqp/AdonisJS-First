/**
 * Contract source: https://git.io/JOdz5
 *
 * Feel free to let us know via PR, if you find something broken in this
 * file.
 */


import { LucidProviderConfig } from '@ioc:Adonis/Addons/Auth';
import { OATGuardContract } from '@ioc:Adonis/Addons/Auth';
import { OATGuardConfig } from '@ioc:Adonis/Addons/Auth';
import { SessionGuardContract } from '@ioc:Adonis/Addons/Auth';
import { LucidProviderContract } from '@ioc:Adonis/Addons/Auth';
import User from 'App/Models/User'

declare module '@ioc:Adonis/Addons/Auth' {
  interface ProvidersList {
    user: {
      implementation: LucidProviderContract<typeof User>,
      config: LucidProviderConfig<typeof User>,
    },
    apps: {
      implementation: LucidProviderContract<typeof App>,
      config: LucidProviderConfig<typeof App>,
    }
  }

  interface GuardsList {
    web: {
      implementation: SessionGuardContract<'user', 'web'>,
      config: SessionGuardConfig<'user'>,
    },
    api: {
      implementation: OATGuardContract<'apps', 'api'>,
      config: OATGuardConfig<'apps'>,
    }
  }
}
