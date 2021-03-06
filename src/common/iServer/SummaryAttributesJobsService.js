import {SuperMap} from '../SuperMap';
import {ProcessingServiceBase} from './ProcessingServiceBase';
import {SummaryAttributesJobsParameter} from './SummaryAttributesJobsParameter';

/**
 * @class SuperMap.SummaryAttributesJobsService
 * @category  iServer ProcessingService SummaryAttributes
 * @classdesc 属性汇总分析服务类
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url - 汇总统计分析服务地址。
 * @param {Object} options - 参数。
 */
export class SummaryAttributesJobsService extends ProcessingServiceBase {

    constructor(url, options) {
        super(url, options);
        this.url += "/spatialanalyst/summaryattributes";
        this.CLASS_NAME = "SuperMap.SummaryAttributesJobsService";
    }

    /**
     *@override
     */
    destroy() {
        super.destroy();
    }

    /**
     * @function SuperMap.SummaryAttributesJobsService.protitype.getSummaryAttributesJobs
     * @description 获取属性汇总分析所有任务
     */
    getSummaryAttributesJobs (){
        super.getJobs(this.url);
    }

    /**
     * @function SuperMap.SummaryAttributesJobsService.protitype.getSummaryAttributesJob
     * @description 获取指定id的属性汇总分析服务
     * @param {string} id - 指定要获取数据的id
     */
    getSummaryAttributesJob(id) {
        super.getJobs(this.url + '/' + id);
    }

    /**
     * @function SuperMap.SummaryAttributesJobsService.protitype.addSummaryAttributesJob
     * @description 新建属性汇总分析服务
     * @param {SuperMap.SummaryAttributesJobsParameter} params - 创建一个空间分析的请求参数。
     * @param {number} seconds - 开始创建后，获取创建成功结果的时间间隔。
     */
    addSummaryAttributesJob(params, seconds) {
        super.addJob(this.url, params, SummaryAttributesJobsParameter, seconds);
    }

}

SuperMap.SummaryAttributesJobsService = SummaryAttributesJobsService;