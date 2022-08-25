import { fetchGadget } from "./fetch";

let env = "stiacn";
// let env = 'stiacn-app'
// 注册
export const register = (params) => {
  const url = `/${env}/user/register`;
  return fetchGadget(url, "POST", params);
};

// 登录
export const login = (params) => {
  const { email, password } = params;
  const url = `/${env}/user/login?email=${email}&password=${password}`;
  return fetchGadget(url, "GET");
};

// 联盟动态
export const getNewsList = (params) => {
  let { page, limit } = params;
  const url = `/website/news/list?page=${page}&limit=${limit}`;
  return fetchGadget(url, "GET");
};

// 未读消息
export const messageTips = () => {
  const url = `/${env}/message/tips`;
  return fetchGadget(url, "GET");
};

// 消息读取
export const readMessage = () => {
  const url = `/${env}/message/enter`;
  return fetchGadget(url, "PUT");
};

// 问题反馈
export const consult = (params) => {
  const url = `/${env}/consult/save`;
  return fetchGadget(url, "POST", params);
};

// 枚举
export const statusEnum = () => {
  const url = `/${env}/dict?dictCode=user_status`;
  return fetchGadget(url, "GET");
};

// 管理员 - 今日待审核注册人数
export const todayPending = () => {
  const url = `/${env}/user/pending`;
  return fetchGadget(url, "GET");
};

// 管理员 - 累计注册人数
export const totalRegister = () => {
  const url = `/${env}/user/total`;
  return fetchGadget(url, "GET");
};

// 管理员 - 用户管理分页数据
export const adminManageList = (params) => {
  const {
    page,
    limit,
    email,
    companyName,
    status,
    approvalTimeBegin,
    approvalTimeEnd,
    applyTimeBegin,
    applyTimeEnd,
  } = params;
  const url =
    `/${env}/user/list?page=${page}&limit=${limit}&email=${email}&` +
    `companyName=${companyName}&status=${status}&approvalTimeBegin=${approvalTimeBegin}&` +
    `approvalTimeEnd=${approvalTimeEnd}&applyTimeBegin=${applyTimeBegin}&applyTimeEnd=${applyTimeEnd}`;
  return fetchGadget(url, "GET");
};

// 管理员 - 年数据
export const yearStatistics = () => {
  const url = `/${env}/user/statistics`;
  return fetchGadget(url, "GET");
};

// 管理员 - 禁用
export const disableUser = (id) => {
  const url = `/${env}/user/disable?id=${id}`;
  return fetchGadget(url, "PUT");
};

// 管理员 - 启用
export const restartUser = (id) => {
  const url = `/${env}/user/restart?id=${id}`;
  return fetchGadget(url, "PUT");
};

// 管理员 - 通过
export const passUser = (ids) => {
  const arr = JSON.parse(JSON.stringify(ids));
  var str = "";
  arr &&
    arr.map((item, index) => {
      if (index != arr.length - 1) {
        str += String(item) + ",";
      } else {
        str += String(item);
      }
    });
  const url = `/${env}/user/pass?ids=${str}`;
  return fetchGadget(url, "PUT");
};

// 管理员 - 驳回
export const rejectUser = (ids) => {
  const arr = JSON.parse(JSON.stringify(ids));
  var str = "";
  arr &&
    arr.map((item, index) => {
      if (index != arr.length - 1) {
        str += String(item) + ",";
      } else {
        str += String(item);
      }
    });
  const url = `/${env}/user/reject?ids=${str}`;
  return fetchGadget(url, "PUT");
};

// 管理员 - 咨询列表
export const consultList = (params) => {
  const {
    page,
    limit,
    consultCompany,
    status,
    phone,
    consultContent,
    consultTimeBegin,
    consultTimeEnd,
  } = params;
  const url =
    `/${env}/consult/list?page=${page}&limit=${limit}&` +
    `consultCompany=${consultCompany}&status=${status}&phone=${phone}&consultContent=${consultContent}&` +
    `consultTimeBegin=${consultTimeBegin}&consultTimeEnd=${consultTimeEnd}`;
  return fetchGadget(url, "GET");
};

// 管理员 - 咨询 - 已读
export const readConsult = (ids) => {
  const arr = JSON.parse(JSON.stringify(ids));
  var str = "";
  arr &&
    arr.map((item, index) => {
      if (index != arr.length - 1) {
        str += String(item) + ",";
      } else {
        str += String(item);
      }
    });
  const url = `/${env}/consult/read?ids=${str}`;
  return fetchGadget(url, "PUT");
};

// 普通用户 关注数量
export const attentionInfo = () => {
  const url = `/${env}/attention/statistics`;
  return fetchGadget(url, "GET");
};

// 普通用户 关注列表
export const attentionList = (params) => {
  const { companyName, industry, page, limit } = params;
  const url = `/${env}/attention/list?page=${page}&limit=${limit}&industry=${industry}&companyName=${companyName}`;
  return fetchGadget(url, "GET");
};

// 普通用户 取消关注
export const cancelAttention = (ids) => {
  const arr = JSON.parse(JSON.stringify(ids));
  var str = "";
  arr &&
    arr.map((item, index) => {
      if (index != arr.length - 1) {
        str += String(item) + ",";
      } else {
        str += String(item);
      }
    });
  const url = `/${env}/attention/cancel?ids=${str}`;
  return fetchGadget(url, "PUT");
};

// 普通用户 关注统计
export const myAttention = () => {
  const url = `/${env}/attention/myAttention`;
  return fetchGadget(url, "GET");
};

// 普通用户 我的申报
export const myDeclare = () => {
  const url = `/${env}/portrait/company/declare`;
  return fetchGadget(url, "GET");
};

// 普通用户 财务报表 资产负债表
export const putDeclareBalance = (params) => {
  const url = `/${env}/declare/balance`;
  return fetchGadget(url, "POST", params);
};

// 普通用户 财务报表 利润表
export const putDeclareProfit = (params) => {
  const url = `/${env}/declare/profit`;
  return fetchGadget(url, "POST", params);
};

// 普通用户 财务报表 现金流量表
export const putDeclareCash = (params) => {
  const url = `/${env}/declare/cashflow`;
  return fetchGadget(url, "POST", params);
};

// 申报 - 基本信息表
export const saveBaseInfo = (params) => {
  const url = `/${env}/declare/baseInfo`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 公司战略
export const saveStrategic = (params) => {
  const url = `/${env}/declare/strategic`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 公司经营
export const saveOperation = (params) => {
  const url = `/${env}/declare/operation`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 核心竞争力
export const saveCoreCompetence = (params) => {
  const url = `/${env}/declare/coreCompetence`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 核心团队
export const saveLeader = (params) => {
  const url = `/${env}/declare/leader`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 核心技术
export const savePatent = (params) => {
  const url = `/${env}/declare/patent`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 投资方
export const saveInvestor = (params) => {
  const url = `/${env}/declare/investor`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 行业成长性
export const saveIndustry = (params) => {
  const url = `/${env}/declare/industry`;
  return fetchGadget(url, "PUT", params);
};

// 申报 - 提交
export const commit = (id) => {
  const url = `/${env}/declare/commit?id=${id}`;
  return fetchGadget(url, "PUT");
};

// 省市区
export const fetchAreas = (pid) => {
  const url = `/${env}/pcd/get?pid=${pid}`;
  return fetchGadget(url, "GET");
};

// 申报 - 删除
export const deleteDeclare = (id) => {
  const url = `/${env}/declare/del?id=${id}`;
  return fetchGadget(url, "DELETE");
};

// 编辑申报
export const getDeclareDetail = (id) => {
  const url = `/${env}/portrait/company?id=${id}`;
  return fetchGadget(url, "GET");
};

// 访问量
export const putVcount = (tag) => {
  const url = `/${env}/visit/vcount?tag=${tag}`;
  return fetchGadget(url, "GET");
}