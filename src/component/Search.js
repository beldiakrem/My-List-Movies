import React, { Component } from 'react'
import {connect} from 'react-redux'
import {search} from '../actions/index'
const  Search =({search})=>{
        return (
            <div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Recherche...</button>
                    </div>
                    <input type="text" class="form-control" placeholder="Saisissez le nom du film à rechercher"
                        // value={this.state.search}
                        onChange={(e)=>search(e.target.value)} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>


                </div>
                )
            
        }
        const d = dispatch => ({
            search : (payload) => dispatch (search(payload))
         })
export default connect (null,d) (Search)