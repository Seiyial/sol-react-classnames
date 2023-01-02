// installer file for react-classnames
import { ShardInstallerPack } from '../../../../src/lib/deploy/ShardInstallerPack'

const install = async (
	installer: ShardInstallerPack
): Promise<{ ok: boolean, error?: string }> => {
	
	// this is required somewhere in the install process. if not called, it will be called after.
	const coreInstall = await installer.performCoreInstall()
	if (!coreInstall.ok) return coreInstall

	return { ok: true }

}

export default install
