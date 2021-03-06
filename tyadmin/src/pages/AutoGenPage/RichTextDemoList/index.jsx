import { DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, ExportOutlined } from '@ant-design/icons';
import { notification, Button, Col, Descriptions, Divider, Dropdown, Form, Input, Menu, message, Popconfirm, Popover, Row, Select, Tag, Transfer, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import KeyOutlined from '@ant-design/icons/lib/icons/KeyOutlined';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from 'mtianyan-pro-table';
import CreateForm from './components/CreateForm';
import { addRichTextDemo, queryRichTextDemo, removeRichTextDemo, updateRichTextDemo, queryRichTextDemoVerboseName, queryRichTextDemoListDisplay, queryRichTextDemoDisplayOrder} from './service';
import UpdateForm from './components/UpdateForm';
import UploadAvatar from '@/components/UploadAvatar';
import {queryUserProfile, queryUserProfileVerboseName} from '@/pages/AutoGenPage/UserProfileList/service';import {queryCategory, queryCategoryVerboseName} from '@/pages/AutoGenPage/CategoryList/service';import {queryTags} from '@/pages/AutoGenPage/TagsList/service';

import moment from 'moment';
const { Option } = Select;
import { BooleanFormItem, dealManyToManyFieldTags, fileUpload, twoColumns, richForm, richCol, dealPureSelectField, orderForm, exportExcelCurrent, exportExcelAll, getUpdateColumns, dealRemoveError, dealError, BooleanDisplay, dealDateTimeDisplay, dealManyToManyField, dealTime, deepCopy, fieldErrorHandle, getTableColumns, renderManyToMany, richTrans, dealForeignKeyField, renderForeignKey, fieldsLevelErrorHandle } from '@/utils/utils';
import 'braft-editor/dist/index.css'
const FormItem = Form.Item;
const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
 
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef();
  const addFormRef = useRef();
  const updateFormRef = useRef();

  const handleAdd = async fields => {
    const hide = message.loading('????????????');

    try {
      await addRichTextDemo({ ...fields });
      hide();
      message.success('????????????');
      return true;
    } catch (error) {
      return dealError(error, addFormRef, hide, "??????");
    }
  };

  const handleUpdate = async (value, current_id) => {
    const hide = message.loading('????????????');

    try {
      await updateRichTextDemo(value, current_id);
      hide();
      message.success('????????????');
      return true;
    } catch (error) {
      return dealError(error, updateFormRef, hide, "??????");
    }
  };

  const handleRemove = async selectedRows => {
    const hide = message.loading('????????????');
    if (!selectedRows) return true;

    try {
      const ids = selectedRows.map(row => row.id).join(',');
      await removeRichTextDemo(ids);
      hide();
      message.success('????????????');
      return true;
    } catch (error) {
      hide()
      return dealRemoveError(error, "??????");
    }
  };
 
  const dateFieldList = []
  const base_columns = [{
                             title: 'id',
                             
        hideInForm: true,
        hideInSearch: true,
        
                             
                             dataIndex: 'id',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '??????',
                             
                             
                             dataIndex: 'name',
                             
                             rules: [
                                     {
                      required: true,
                      message: '??????????????????',
                     },
                             ],
                             
                             
                        },
                      {
                             title: '??????',
                             
                             
                             dataIndex: 'user',
                             
                             rules: [
                                     {
                      required: true,
                      message: '??????????????????',
                     },
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, userForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, userVerboseNameMap);
                            },
                             
                        },
                      {
                             title: '??????',
                             
        hideInSearch: true,
        
                             
                             dataIndex: 'content',
                             valueType: 'textarea',
                             rules: [
                                     {
                      required: true,
                      message: '??????????????????',
                     },
                             ],
                             
                                                              customCol:richCol,
                                                              ellipsis: true,
renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                                  return richForm(form, rest.id);
                                },
                             
                        },
                      {
                             title: '??????',
                             
                             
                             dataIndex: 'category',
                             
                             rules: [
                                     {
                      required: true,
                      message: '??????????????????',
                     },
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, categoryForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, categoryVerboseNameMap);
                            },
                             
                        },
                      {
                             title: '??????',
                             
                             
                             dataIndex: 'tags',
                             
                             rules: [
                                     {
                      required: true,
                      message: '??????????????????',
                     },
                             ],
                             
                
                renderFormItem: (item, {value, onChange, type, defaultRender}) => {
                      return dealManyToManyField(item, value,onChange,type, tagsManyToManyList)
                },
               render: (text, record) => {
                    return renderManyToMany(text)
            }, 
        
                             
                        },
                          {
                              title: '??????',
                              dataIndex: 'option',
                              valueType: 'option',
                                    fixed: 'right',
          width: 100,
                              render: (text, record) => (
                                <>

                                  <EditOutlined title="??????" className="icon" onClick={async () => {
                                   
                                    handleUpdateModalVisible(true);
                                    setUpdateFormValues(record);
                                  }} />
                                  <Divider type="vertical" />
                                  <Popconfirm
                                    title="?????????????????????????????????[??????????????????????????????]??????"
                                    placement="topRight"
                                    onConfirm={() => {
                                      handleRemove([record])
                                      actionRef.current.reloadAndRest();
                                    }}
                                    okText="??????"
                                    cancelText="??????"
                                  >
                                    <DeleteOutlined title="??????" className="icon" />
                                  </Popconfirm>
                                </>
                              ),
                            },];

  let cp = deepCopy(base_columns);

  const [formOrder, setFormOrder] = useState([]);

  useEffect(() => {
    queryRichTextDemoDisplayOrder().then(r => {
      setFormOrder(r.form_order)
    })
  }, [])
  const table_columns = getTableColumns(cp);

  let order_cp = deepCopy(base_columns);
  const form_ordered = orderForm(formOrder, order_cp);

  const create_columns = [...form_ordered];
  const update_cp = deepCopy(form_ordered)
  const update_columns = getUpdateColumns(update_cp);

  const [columnsStateMap, setColumnsStateMap] = useState({});

  const [paramState, setParamState] = useState({});

  useEffect(() => {
    queryRichTextDemoListDisplay().then(value => {
      setColumnsStateMap(value)
    })
  }, [])


   
                                const [userForeignKeyList, setUserForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryUserProfile({all: 1}).then(value => {
                                     setUserForeignKeyList(value);
                                });
                                }, []);
                                const [userVerboseNameMap, setUserVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryUserProfileVerboseName().then(value => {
                                    setUserVerboseNameMap(value);
                                });
                                }, []);
                                const [categoryForeignKeyList, setCategoryForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryCategory({all: 1}).then(value => {
                                     setCategoryForeignKeyList(value);
                                });
                                }, []);
                                const [categoryVerboseNameMap, setCategoryVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryCategoryVerboseName().then(value => {
                                    setCategoryVerboseNameMap(value);
                                });
                                }, []);

   const [tagsManyToManyList, setTagsManyToManyList] = useState([]);
                        useEffect(() => {
                          queryTags({all:1}).then(value => {
                            setTagsManyToManyList(value);
                          });
                        }, []);
  return (
    <PageHeaderWrapper>
      <ProTable
        beforeSearchSubmit={(params => {
          dealTime(params, dateFieldList);
          return params;
        })}
        params={paramState}
        scroll={{ x: '100%' }}
        columnsStateMap={columnsStateMap}
        onColumnsStateChange={(map) => setColumnsStateMap(map)}
        headerTitle="???????????????[??????????????????????????????]??????"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> ??????
          </Button>,
          <Button type="primary" onClick={() => exportExcelAll(paramState, queryRichTextDemo, table_columns, '???????????????[??????????????????????????????]-All')}>
            <ExportOutlined /> ????????????
          </Button>,
          <Input.Search style={{ marginRight: 20 }} placeholder="?????????????????????[??????????????????????????????]" onSearch={value => {
            setParamState({
              search: value,
            });
            actionRef.current.reload();
          }} />,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      actionRef.current.reloadAndRest();
                    }
                    else if (e.key === 'export_current') {
                      exportExcelCurrent(selectedRows, table_columns, '???????????????[??????????????????????????????]-select')
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">????????????</Menu.Item>
                  <Menu.Item key="export_current">????????????</Menu.Item>
                </Menu>
              }
            >
              <Button>
                ???????????? <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          selectedRowKeys.length > 0 ? <div>
            ?????????{' '}
            <a
              style={{
                fontWeight: 600,
              }}
            >
              {selectedRowKeys.length}
            </a>{' '}
            ???&nbsp;&nbsp;
          </div> : false

        )}
        request={(params, sorter, filter) => queryRichTextDemo({ ...params, sorter, filter })}
        columns={table_columns}
        rowSelection={{}}
      />
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          formRef={addFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          search={{}}
          form={
            {
              labelCol: { span: 6 },
              labelAlign: 'left',
            }}
          columns={create_columns}
          rowSelection={{}}
        />
      </CreateForm>
      <UpdateForm onCancel={() => handleUpdateModalVisible(false)} modalVisible={updateModalVisible}>
        <ProTable
          formRef={updateFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleUpdate(value, updateFormValues.id);

            if (success) {
              handleUpdateModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          search={{}}
          type="form"
          form={{
            initialValues: updateFormValues, labelCol: { span: 6 },
            labelAlign: 'left',
          }}
          columns={update_columns}
          rowSelection={{}}
        />
      </UpdateForm>
       
    </PageHeaderWrapper>
  );
};

export default TableList;
