class TasksController < ApplicationController
    def index
        tasks = Task.all.order(created_at: :DESC)
        if tasks.length == 0
            render json: { message: "You don't have any task at the moment, please add a task." }
         else 
            render json: tasks
         end
    end

    def create
        task = Task.create!(task_params)
        render json: task
    end

    def update
        task = Task.find(params[:id])
        task.update(completed_at: Time.now.strftime("%I:%M %p"))
    end

    private

    def task_params
        params.permit(:avatar, :description)
    end
end

# I could use responder gem which use to be part of rails core, but it was moved into a gem in Rails 4.2. Basically I'm not using it because I'm tring to use minimal gems as instructed.