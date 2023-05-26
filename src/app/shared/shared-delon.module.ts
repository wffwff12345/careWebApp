import { DownFileModule } from '@delon/abc/down-file';
import { ExceptionModule } from '@delon/abc/exception';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/custom';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2SingleBarModule } from '@delon/chart/single-bar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { TrendModule } from '@delon/chart/trend';
import { G2WaterWaveModule } from '@delon/chart/water-wave';

export const SHARED_DELON_MODULES = [
  PageHeaderModule,
  ResultModule,
  ExceptionModule,
  NoticeIconModule,
  GlobalFooterModule,
  STModule,
  SEModule,
  SVModule,
  ReuseTabModule,
  G2BarModule,
  G2CardModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2SingleBarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  NumberInfoModule,
  TrendModule,
  G2CustomModule,
  FooterToolbarModule,
  DownFileModule
];
