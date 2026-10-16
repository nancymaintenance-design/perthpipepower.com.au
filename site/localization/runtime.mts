/** Only runtime-owned labels; route IDs and backend service values never change. */
export const serviceLabels:Readonly<Record<string,string>>={
 'plumbing.html':'管道维修与安装','electrical.html':'电气维修与安装','property-management.html':'管理物业管道与电气维护',
 'hot-water-problems-perth.html':'热水维修与系统更换','blocked-drains-perth.html':'排水管堵塞维修','water-leak-detection-perth.html':'漏水检测',
 'burst-pipe-repair-perth.html':'爆管维修','tap-mixer-repairs-perth.html':'水龙头与混合水龙头维修','toilet-repairs-perth.html':'马桶维修',
 'power-faults-perth.html':'电气故障排查','safety-switch-tripping-perth.html':'安全开关跳闸维修','lighting-power-points-perth.html':'照明与电源插座服务',
 'smoke-alarm-maintenance-perth.html':'烟雾报警器维护','fixtures-appliances-perth.html':'洁具与电器连接','renewables-smart-home-perth.html':'智能家居与能源电气服务',
 'lighting-installation-perth.html':'照明安装与维修','power-points-perth.html':'电源插座安装与维修','dishwasher-installation-perth.html':'洗碗机安装与连接',
 'toilet-installation-perth.html':'马桶安装与更换','shower-plumbing-repairs-perth.html':'淋浴管道漏水维修','water-pressure-perth.html':'低水压与水锤',
 'ceiling-fans-perth.html':'吊扇安装与维修','exhaust-fans-perth.html':'浴室排风扇更换','switchboard-upgrades-perth.html':'配电箱维修与升级',
 'rcd-testing-perth.html':'RCD 测试与安全开关检查','emergency-plumber-perth.html':'24小时紧急水管工','emergency-electrician-perth.html':'24小时紧急电工'
};
export const chineseRuntimeConfig=()=>'<script data-locale-runtime>window.EllisLocale=Object.freeze('+JSON.stringify({locale:'zh-Hans',serviceLabels}).replace(/</g,'\\u003c')+');</script>';
